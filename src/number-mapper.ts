import { injectable } from "inversify";
import { NumberMapperInterface } from "number-mapper-interface";

@injectable()
export class NumberMapper implements NumberMapperInterface {
  public mapper(input: unknown, byDefault: number | undefined = 0): number {
    const value = Number(input ? String(input).trim() : byDefault);
    return Number.isNaN(value) === true ? byDefault : value;
  }
}
