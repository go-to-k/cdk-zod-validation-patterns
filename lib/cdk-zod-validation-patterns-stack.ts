import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ConfigStackProps } from './config';
import { StackValidator } from './stack-validator';
import { StackInput } from './stack-input';

export class CdkZodValidationPatternsStack extends cdk.Stack {
  private stackInput: StackInput;

  constructor(scope: Construct, id: string, props: ConfigStackProps) {
    super(scope, id, props);
    this.init(props);
  }

  private init(props: ConfigStackProps) {
    this.stackInput = props.config;

    const stackValidator = new StackValidator(this.stackInput);
    this.node.addValidation(stackValidator);
  }
}
