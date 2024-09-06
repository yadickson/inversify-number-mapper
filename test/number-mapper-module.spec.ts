import { expect } from "chai";
import { Container } from "inversify";
import sinon from "ts-sinon";
import { NUMBER_MAPPER_TYPE, NumberMapperInterface, NumberMapperModule } from "index";
import { NumberMapper } from "number-mapper";

describe("NumberMapperModule tests", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(new NumberMapperModule());
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should check bind NumberMapper", () => {
    expect(container.isBound(NUMBER_MAPPER_TYPE.NumberMapper)).is.equal(true);
  });

  it("should check NumberMapperInterface", () => {
    const util = container.get<NumberMapperInterface>(NUMBER_MAPPER_TYPE.NumberMapper);
    expect(util).instanceOf(NumberMapper);
  });
});
