import Duplo from "@duplojs/duplojs";
import {parentPort} from "worker_threads";
import duploHttpException, {NotFoundHttpException, OkHttpException, PermanentRedirectHttpException} from "../../scripts/index";

const duplo = Duplo({port: 1506, host: "localhost"});
duplo.use(duploHttpException);

duplo.declareRoute("GET", "/test/1")
.handler(() => {
	throw new OkHttpException("s", "hello-world");
});

duplo.declareRoute("GET", "/test/2")
.cut(() => {
	throw new NotFoundHttpException();
})
.handler(() => {});

duplo.declareRoute("GET", "/test/3")
.handler(() => {
	throw new PermanentRedirectHttpException("/test/1");
});

duplo.launch(() => parentPort?.postMessage("ready"));
