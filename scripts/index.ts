import {DuploConfig, DuploInstance} from "@duplojs/duplojs";
import {duploExtends, duploInject} from "@duplojs/editor-tools";
import packageJson from "../package.json";
import * as he from "./exception";
export * from "./exception";
import {HttpException, CustomHttpException} from "./exception";

declare module "@duplojs/duplojs" {
	interface Plugins {
		"@duplojs/http-exception": {
			version: string,
		},
	}
}

export interface HttpExceptionParameters {
	globals?: boolean;
}

export default function duploHttpException(
	instance: DuploInstance<DuploConfig>,
	{
		globals = false,
	}: HttpExceptionParameters = {}
){
	instance.plugins["@duplojs/http-exception"] = {version: packageJson.version};

	if(globals){
		Object.entries(he).forEach(([key, value]) => {
			//@ts-ignore
			global[key] = value;
		});
	}

	instance.addHook("onDeclareRoute", (route) => {
		duploExtends(route, {HttpException, CustomHttpException});
		
		duploInject(
			route, 
			({code}) => {
				code("first_line_second_catch", /* js */`
					if(error instanceof this.extensions.HttpException){
						if(error instanceof this.extensions.CustomHttpException)error.handler(request, response);
						response.code(error.code).info(error.info).send(error.body);
					}
				`);
			}
		);
	});
}
