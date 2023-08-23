#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HelloConstructsStack } from '../lib/hello-constructs-stack';

const app = new cdk.App();

new HelloConstructsStack(app, 'HelloConstructsStack', {
  env: {
    account: process.env.ACCOUNT,
    region: process.env.REGION
  }
});
/*
new HelloConstructsStack(app, 'HelloConstructsStack-dev', {
  env: {
    account: process.env.DEV_ACCOUNT,
    region: process.env.DEV_REGION
  }
});

new HelloConstructsStack(app, 'HelloConstructsStack-test', {
  env: {
    account: process.env.TEST_ACCOUNT,
    region: process.env.TEST_REGION
  }
});

new HelloConstructsStack(app, 'HelloConstructsStack-blue', {
   env: {
    account: process.env.PROD_ACCOUNT,
    region: process.env.PROD_REGION
   }
});

new HelloConstructsStack(app, 'HelloConstructsStack-green', {
   env: {
    account: process.env.PROD_ACCOUNT,
    region: process.env.PROD_REGION
   }
});*/