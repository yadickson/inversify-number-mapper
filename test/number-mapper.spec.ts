import { faker } from "@faker-js/faker";
import { expect } from "chai";
import { NumberMapper } from "number-mapper";
import { NumberMapperInterface } from "number-mapper-interface";

describe("NumberMapper tests", () => {
  let mapper: NumberMapperInterface;
  const defaultValue = 0;

  beforeEach(() => {
    mapper = new NumberMapper();
  });

  it("should return default value when input is null", () => {
    const result = mapper.mapper(null);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return default value when input is not numeric", () => {
    const input = faker.string.uuid();
    const result = mapper.mapper(input);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should return input default value when input is not numeric", () => {
    const input = faker.string.uuid();
    const inputDefault = faker.number.int();
    const result = mapper.mapper(input, inputDefault);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(inputDefault);
  });

  it("should return value when input is numeric", () => {
    const input = faker.number.int();
    const result = mapper.mapper(input);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(input);
  });

  it("should return default value when input is undefined", () => {
    const result = mapper.mapper(undefined);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(defaultValue);
  });

  it("should trim input", () => {
    const input = faker.number.int();
    const stringNumeric = ` ${input} `;
    const result = mapper.mapper(stringNumeric);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(input);
  });

  it("should return the same input when value is 1000000000000000000000000000", () => {
    const value = "1000000000000000000000000000";
    const result = mapper.mapper(value);
    expect(result).to.be.not.eq(null);
    expect(result).is.equal(Number(value));
  });
});
