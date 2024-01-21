import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"
import * as awsx from "@pulumi/awsx"

// Define your asynchronous function
async function main() {
  const exportedValues: any = {}

  const serviceName = "diogos-page"

  // Elastic Container Registry: necessary for storing docker images
  const ecrRepo = new awsx.ecr.Repository("awesome-repo")
  exportedValues.url = ecrRepo.url

  // a Cluster is where Docker containers run
  const cluster = new aws.ecs.Cluster(`${serviceName}-cluster`)

  // Task Definition specifies how my app should run: memory, ports, which docker image to use.
  const containerName = `${serviceName}-container` // define as a var because we reuse later
  const taskDefinition = new awsx.ecs.FargateTaskDefinition(`${serviceName}-task-definition`, {
    container: {
      name: containerName,
      image: pulumi.interpolate`${ecrRepo.url}:latest`,
      cpu: 256,
      memory: 512,
      portMappings: [{ containerPort: 3000 }],
    },
  })

  // a Service is responsible for running and maintaining my task definition
  const service = new awsx.ecs.FargateService(`${serviceName}-service`, {
    cluster: cluster.arn,
    taskDefinition: taskDefinition.taskDefinition.arn,
    assignPublicIp: true,
  })

  const vpc = await aws.ec2.getVpc({ default: true }, { async: true })
  const vpcSubnets = await aws.ec2.getSubnets({ filters: [{ name: "vpc-id", values: [vpc.id] }] }, { async: true })
  const subnets = vpcSubnets.ids

  // Create an Application Load Balancer
  const albSecurityGroup = new aws.ec2.SecurityGroup(`${serviceName}-alb-security-group`, {
    vpcId: vpc.id,
    ingress: [{ protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] }],
  })

  const alb = new aws.lb.LoadBalancer(`${serviceName}-alb`, {
    loadBalancerType: "application",
    subnets,
    securityGroups: [albSecurityGroup.id],
    enableDeletionProtection: false, // Set to true if you want deletion protection
  })

  // Create a Target Group
  const albTargetGroup = new aws.lb.TargetGroup(`${serviceName}-target-group`, {
    port: 80,
    protocol: "HTTP",
    targetType: "ip",
    vpcId: vpc.id,
  })

  // Create a Listener for the ALB that forwards traffic to the target group
  const albListener = new aws.lb.Listener(`${serviceName}-alb-listener`, {
    loadBalancerArn: alb.arn,
    port: 80,
    defaultActions: [
      {
        type: "forward",
        targetGroupArn: albTargetGroup.arn,
      },
    ],
  })

  // Attach ECS service to the Target Group
  const ecsServiceAttachment = new aws.ecs.Service(
    `${serviceName}-ecs-service-attachment`,
    {
      name: service.service.name, // Use the existing ECS service name
      loadBalancers: [
        {
          targetGroupArn: albTargetGroup.arn,
          containerName, // Replace with your container name
          containerPort: 80,
        },
      ],
      networkConfiguration: {
        // Assure that your service can interact with the load balancer properly
        subnets,
        // Add any security groups or other network configurations if needed
      },
    },
    { ignoreChanges: ["loadBalancers"] },
  ) // ignore changes to the loadBalancers property to prevent resource replacement

  // Export the DNS name of the ALB
  exportedValues.albDnsName = alb.dnsName
}

main()
