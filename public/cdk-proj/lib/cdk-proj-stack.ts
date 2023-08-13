import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';


export class CdkProjStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 3
    })

    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc : vpc
    })

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargate', {
      cluster: cluster,
      cpu: 512,
      desiredCount: 3, 
      taskImageOptions: {image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample")},
      memoryLimitMiB: 2048,
      publicLoadBalancer: true,
    })

    
  }
}
