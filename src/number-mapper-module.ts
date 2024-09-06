import { ContainerModule } from "inversify";
import { NumberMapper } from "number-mapper";
import { NumberMapperInterface } from "number-mapper-interface";
import { NUMBER_MAPPER_TYPE } from "number-mapper-type";

export class NumberMapperModule extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<NumberMapperInterface>(NUMBER_MAPPER_TYPE.NumberMapper).to(NumberMapper);
    });
  }
}
