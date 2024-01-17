import * as awsx from "@pulumi/awsx"

const repo = new awsx.ecr.Repository("awesome-repo")
export const url = repo.url
