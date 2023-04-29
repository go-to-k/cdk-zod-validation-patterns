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
    incomingWebhookUrl: "https://hooks.slack.com/services/********",
    scheduleExpression: "cron(0/10 4 ? * MON-FRI *)",
    senderAddress: "example@example.com",
    snsTopicArn: "arn:aws:sns:ap-northeast-1:123456789012:example-sns-topic-name",
    snsTopicTokyoArn: "arn:aws:sns:ap-northeast-1:123456789012:example-sns-topic-name",
  },
};