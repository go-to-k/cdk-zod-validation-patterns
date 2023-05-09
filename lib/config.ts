import { StackProps } from "aws-cdk-lib";
import { StackInput } from "./stack-input";

export interface ConfigStackProps extends StackProps {
  config: StackInput;
}

export const configStackProps: ConfigStackProps = {
  env: {
    region: "ap-northeast-1",
  },
  config: {
    stackName: "dev-app-goto-CdkZodValidationPatternsStack",
    desiredCount: 2,
    cpu: 8192,
    incomingWebhookUrl: "https://hooks.slack.com/services/********",
    senderAddress: "example@example.com",
    ipWhiteList: ["192.168.0.1", "84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003"],
    scheduleExpression: "cron(0/10 4 ? * MON-FRI *)",
    snsTopicArn: "arn:aws:sns:ap-northeast-1:123456789012:example-sns-topic-name",
    snsTopicTokyoArn: "arn:aws:sns:ap-northeast-1:123456789012:example-sns-topic-name",
    bucketArn: "arn:aws:s3:::my-bucket-name-0123456789012",
    appRunnerCpu: "0.25 vCPU",
    appRunnerSpec: {
      cpu: "0.25 vCPU",
      memory: "1 GB",
    },
  },
};
