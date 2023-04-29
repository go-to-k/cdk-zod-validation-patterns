import { z } from "zod";

const appRunnerSpecLiteralSchema = z.object({
  cpu: z.union([
    z.literal("0.25 vCPU"),
    z.literal("0.5 vCPU"),
    z.literal("1 vCPU"),
    z.literal("2 vCPU"),
    z.literal("4 vCPU"),
  ]),
  memory: z.union([
    z.literal("0.5 GB"),
    z.literal("1 GB"),
    z.literal("2 GB"),
    z.literal("3 GB"),
    z.literal("4 GB"),
    z.literal("6 GB"),
    z.literal("8 GB"),
    z.literal("10 GB"),
    z.literal("12 GB"),
  ]),
});

type AppRunnerSpecLiteral = z.infer<typeof appRunnerSpecLiteralSchema>;

const validCombinationRule: Array<AppRunnerSpecLiteral> = [
  { cpu: "0.25 vCPU", memory: "0.5 GB" },
  { cpu: "0.25 vCPU", memory: "1 GB" },
  { cpu: "0.5 vCPU", memory: "1 GB" },
  { cpu: "1 vCPU", memory: "2 GB" },
  { cpu: "1 vCPU", memory: "3 GB" },
  { cpu: "1 vCPU", memory: "4 GB" },
  { cpu: "2 vCPU", memory: "4 GB" },
  { cpu: "2 vCPU", memory: "6 GB" },
  { cpu: "4 vCPU", memory: "8 GB" },
  { cpu: "4 vCPU", memory: "10 GB" },
  { cpu: "4 vCPU", memory: "12 GB" },
];

export const appRunnerSpecSchema = appRunnerSpecLiteralSchema.refine(
  (combination) =>
    validCombinationRule.some(
      (validCombinationRule) =>
        validCombinationRule.cpu === combination.cpu &&
        validCombinationRule.memory === combination.memory,
    ),
  {
    message: "Invalid CPU and Memory combination",
  },
);
