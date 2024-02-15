import * as he from "./exception";
import "./__types";

Object.entries(he).forEach(([key, value]) => {
	//@ts-ignore
	global[key] = value;
});
