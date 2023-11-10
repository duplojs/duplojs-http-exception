import {zod} from "@duplojs/duplojs";
import {workerTesting} from "@duplojs/worker-testing";

export default workerTesting(
	__dirname + "/route.ts",
	[
		{
			title: "hello-world",
			url: "http://localhost:1506/test/1",
			method: "GET",
			response: {
				code: 200,
				info: "s",
				body: zod.literal("hello-world"),
			}
		},
		{
			title: "not found",
			url: "http://localhost:1506/test/2",
			method: "GET",
			response: {
				code: 404,
			}
		},
		{
			title: "redirect",
			url: "http://localhost:1506/test/3",
			method: "GET",
			response: {
				code: 200,
				info: "s",
				body: zod.literal("hello-world"),
			}
		},
	]
);
