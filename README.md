# inversify-number-mapper

inversify string mapper utility

## install dependencies

```bash
npm install
```

## build

```bash
npm run build
```

## test

```bash
npm test
```

## test with coverage report

```bash
npm run test:coverage
```

## mutation test

```bash
npm run test:mutation
```

## format

```bash
npm run format
```

## Install into project

```bash
npm install inversify-number-mapper
```

## How to use

Load the module.

```javascript
...
import { NumberMapperModule } from "inversify-number-mapper";
...

export const container = (): Container => {
  const container = new Container();
  container.load(new NumberMapperModule());
  return container;
};
```

Inject the interface by type.

```javascript
...
import { NUMBER_MAPPER_TYPE, NumberMapperInterface } from "inversify-number-mapper";
...

  @inject(NUMBER_MAPPER_TYPE.NumberMapper)
  private readonly stringMapper: NumberMapperInterface
```

Use the mapper.

```javascript

...
  stringMapper.mapper('value'); // return 0
  stringMapper.mapper(null); // return 0
  stringMapper.mapper(null, 10); // return 10
  stringMapper.mapper(' 5 '); // return 5
  stringMapper.mapper(5); // return 5
...

```
