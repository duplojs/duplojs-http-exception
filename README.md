# duplojs-http-exception
[![NPM version](https://img.shields.io/npm/v/@duplojs/http-exception)](https://www.npmjs.com/package/@duplojs/http-exception)

## Instalation
```
npm i @duplojs/http-exception
```

## Utilisation
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