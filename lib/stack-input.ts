import { z } from "zod";
import { appRunnerSpecSchema } from "./app-runner-spec-type";

export const stackInputSchema = z.object({
  stackName: z.string().max(128).startsWith("dev").endsWith("Stack").includes("-goto-"),
  desiredCount: z.number().nonnegative().max(15),
  cpu: z.number().positive().multipleOf(256).max(16384),
  incomingWebhookUrl: z.string().url().min(1),
  senderAddress: z.string().email().min(1),
  ipWhiteList: z.array(z.string().ip()),
  scheduleExpression: z.string().regex(/^cron\(([^\s]+\s){5}[^\s]+\)$/),
  snsTopicArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:[^:]+:\d{12}:.+$/),
  snsTopicTokyoArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:ap-northeast-1:\d{12}:.+$/),
  bucketArn: z
    .string()
    .regex(/^arn:aws:s3:::(?!.*\.\.)(?!.*\.-)(?!.*-\.)[a-z0-9][a-z0-9.-]{1,61}[a-z0-9.]$/),
  appRunnerSpec: appRunnerSpecSchema,
  // z.string().length(12),
});

export type StackInput = z.infer<typeof stackInputSchema>;
