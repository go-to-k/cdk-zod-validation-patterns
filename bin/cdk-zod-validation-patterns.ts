#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkZodValidationPatternsStack } from '../lib/cdk-zod-validation-patterns-stack';
import { configStackProps } from '../lib/config';

const app = new cdk.App();
new CdkZodValidationPatternsStack(app, 'CdkZodValidationPatternsStack', configStackProps);