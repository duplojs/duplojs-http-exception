import {writeFileSync} from "fs";
import {resolve} from "path";
import * as he from "./exception";

const workDir = process.cwd();

writeFileSync(
	resolve(workDir, "globals.d.ts"),
	`
export {};
declare global {
	${Object.keys(he).map(v => `const ${v}: typeof import("./types/scripts/exception")["${v}"]`).join(";\n\t")};
}
`
);
