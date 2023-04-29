import { IValidation } from "constructs";
import { StackInput, stackInputSchema } from "./stack-input";

export class StackValidator implements IValidation {
  private stackInput: StackInput;

  constructor(stackInput: StackInput) {
    this.stackInput = stackInput;
  }

  public validate(): string[] {
    const errors: string[] = [];

    try {
      stackInputSchema.parse(this.stackInput);
    } catch (e) {
      errors.push(JSON.stringify(e));
    }

    return errors;
  }
}
