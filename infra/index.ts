import * as aws from "@pulumi/aws"
import * as awsx from "@pulumi/awsx"

const repo = new awsx.ecr.Repository("awesome-repo")
export const url = repo.url

const cluster = new aws.ecs.Cluster("awesome-cluster")
