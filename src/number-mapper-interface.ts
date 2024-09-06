export interface NumberMapperInterface {
  mapper(input: unknown, byDefault?: number): number;
}
