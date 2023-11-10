# duplojs-http-exception

## Instalation
```
npm i @duplojs/http-exception
```

## Utilisation
```ts
import Duplo from "@duplojs/duplojs";
import duploHttpException, {OkHttpException} from "@duplojs/http-exception";

const duplo = Duplo({port: 1506, host: "localhost"});
duplo.use(duploHttpException);

duplo.declareRoute("GET", "/")
.handler(() => {
	throw new OkHttpException("successful", "hello-world");
});

duplo.launch();
```