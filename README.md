# inversify-number-mapper

[![version](https://img.shields.io/github/package-json/v/yadickson/inversify-number-mapper?style=flat-square)](https://www.npmjs.com/package/inversify-number-mapper)
![license](https://img.shields.io/github/license/yadickson/inversify-number-mapper?style=flat-square)
[![build](https://img.shields.io/github/actions/workflow/status/yadickson/inversify-number-mapper/npm-build.yml?branch=main&style=flat-square)](https://github.com/yadickson/inversify-number-mapper/actions/workflows/npm-build.yml)
![tests](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-number-mapper-junit-tests.json)
![coverage](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-number-mapper-cobertura-coverage.json)

inversify number mapper utility

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
  private readonly numberMapper: NumberMapperInterface
```

Use the mapper.

```javascript

...
  numberMapper.mapper('value'); // return 0
  numberMapper.mapper(null); // return 0
  numberMapper.mapper(null, 10); // return 10
  numberMapper.mapper(' 5 '); // return 5
  numberMapper.mapper(5); // return 5
...

```
