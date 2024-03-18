# duplojs-http-exception
[![NPM version](https://img.shields.io/npm/v/@duplojs/http-exception)](https://www.npmjs.com/package/@duplojs/http-exception)

## Instalation
```
npm i @duplojs/http-exception
```

## Implémentation
```ts
import Duplo from "@duplojs/duplojs";
import duploHttpException, {OkHttpException} from "@duplojs/http-exception";

const duplo = Duplo({port: 1506, host: "localhost", environment: "DEV"});
duplo.use(duploHttpException);

duplo.declareRoute("GET", "/")
.handler(() => {
    throw new OkHttpException("successful", "hello-world");
});

duplo.launch();
```

## Implémentation globales
```ts
duplo.use(duploHttpException, {
    ...
    globals: true
});
```

tsconfig.json
```json
{
  "compilerOptions": {
    ...
    "types": [
        "@duplojs/http-exception/globals"
    ],
  }
}
```