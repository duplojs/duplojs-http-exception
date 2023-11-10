import {DuploConfig, DuploInstance} from "@duplojs/duplojs";
import {duploExtend, duploInjector} from "@duplojs/editor-tools";
import packageJson from "../package.json";
export * from "./exception";
import {HttpException, CustomHttpException} from "./exception";

declare module "@duplojs/duplojs" {
	interface Plugins {
		"@duplojs/http-exception": {
			version: string,
		},
	}
}

export default function duploHttpException(instance: DuploInstance<DuploConfig>){
	instance.plugins["@duplojs/http-exception"] = {version: packageJson.version};

	instance.addHook("onDeclareRoute", (route) => {
		duploExtend(route, {HttpException, CustomHttpException});
		duploInjector(route, (object, insert) => {
			insert("first_line_second_catch", /* js */`
				if(error instanceof this.extends.HttpException){
					if(error instanceof this.extends.CustomHttpException)error.handler(request, response);
					response.code(error.code).info(error.info).send(error.data);
				}
			`);
		});
	});
}
