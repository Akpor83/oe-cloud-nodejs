#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkProjStack } from '../lib/cdk-proj-stack';

const app = new cdk.App();
new CdkProjStack(app, 'CdkProjStack');
