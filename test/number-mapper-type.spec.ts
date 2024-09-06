import { expect } from "chai";
import { NUMBER_MAPPER_TYPE } from "number-mapper-type";

describe("NumberMapperType tests", () => {
  it("should check NumberMapper value", () => {
    expect(NUMBER_MAPPER_TYPE.NumberMapper).is.equal(Symbol.for("NUMBER_MAPPER_TYPE -> NumberMapperInterface"));
  });
});
