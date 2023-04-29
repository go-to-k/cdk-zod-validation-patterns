import { z } from "zod";

export const StackInputSchema = z.object({
    incomingWebhookUrl: z.string().url().min(1),
    senderAddress: z.string().email().min(1),
    scheduleExpression: z.string().regex(/^cron\(([^\s]+\s){5}[^\s]+\)$/),
    snsTopicArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:[^:]+:\d{12}:.+$/),
    snsTopicTokyoArn: z.string().regex(/^arn:(aws|aws-cn|aws-us-gov):sns:ap-northeast-1:\d{12}:.+$/),
    // scheduleExpression: z.string().startsWith("cron(").endsWith(")"), // cron式
  });
  
export type StackInput = z.infer<typeof StackInputSchema>;