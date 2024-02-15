import {writeFileSync} from "fs";
import {resolve} from "path";
import * as he from "./exception";

const workDir = process.cwd();

writeFileSync(
	resolve(workDir, "scripts/__types.ts"),
	`
export {};
declare global {
	${Object.keys(he).map(v => `const ${v}: typeof import("./exception")["${v}"]`).join(";\n\t")};
}
`
);
