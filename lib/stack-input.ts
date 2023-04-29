import { z } from "zod";
import { appRunnerSpecSchema } from "./app-runner-spec-type";

export const stackInputSchema = z.object({
  desiredCount: z.number().nonnegative(),
  cpu: z.number().positive().multipleOf(256).max(16384),
  appRunnerSpec: appRunnerSpecSchema,
  incomingWebhookUrl: z.string().url().min(1),
  senderAddress: z.string().email().min(1),
  ipWhiteList: z.array(z.string().ip()),
  scheduleExpression: z.string().regex(/^cron\(([^\s]+\s){5}[^\s]+\)$/),
  snsTopicArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:[^:]+:\d{12}:.+$/),
  snsTopicTokyoArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:ap-northeast-1:\d{12}:.+$/),
  bucketName: z
    .string()
    .regex(/^arn:aws:s3:::(?!.*\.\.)(?!.*\.-)(?!.*-\.)[a-z0-9][a-z0-9.-]{1,61}[a-z0-9.]$/),
  // scheduleExpression: z.string().startsWith("cron(").endsWith(")"), // cron式
  // z.string().length(12),
  // z.string().includes(),
});

export type StackInput = z.infer<typeof stackInputSchema>;
