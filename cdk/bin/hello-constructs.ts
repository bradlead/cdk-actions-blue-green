#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloConstructsStack } from '../lib/hello-constructs-stack';

const app = new cdk.App();


new HelloConstructsStack(app, 'HelloConstructsStack-dev', {
  env: {
    account: process.env.DEV_ACCOUNT,
    region: process.env.DEV_REGION
  }
});

new HelloConstructsStack(app, 'HelloConstructsStack-blue', {
   env: {
    account: process.env.BLUE_ACCOUNT,
    region: process.env.BLUE_REGION
   }
});

new HelloConstructsStack(app, 'HelloConstructsStack-green', {
   env: {
    account: process.env.GREEN_ACCOUNT,
    region: process.env.GREEN_REGION
   }
});