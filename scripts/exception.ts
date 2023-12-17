import {Request, Response} from "@duplojs/duplojs";

export abstract class HttpException{
	constructor(code: number, info?: string, data?: unknown){
		this.code = code;
		this.info = info;
		this.data = data;
	}

	code: number;
	info?: string;
	data?: unknown;
}

export abstract class CustomHttpException extends HttpException{
	constructor(code: number, info?: string, data?: unknown){
		super(code, info, data);
	}

	abstract handler(request: Request, response: Response): void
}

/*
	CODE 200
*/
export class OkHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(200, info, data);
	}
}

export class CreatedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(201, info, data);
	}
}

export class AcceptedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(202, info, data);
	}
}

export class NoContentHttpException extends HttpException{
	constructor(info?: string){
		super(204, info);
	}
}

export class ResetContentHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(205, info, data);
	}
}

export class PartialContentHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(206, info, data);
	}
}

/*
	CODE 300
*/
export class MultipleChoicesHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(300, info, data);
	}
}

export class MovedPermanentlyHttpException extends CustomHttpException{
	constructor(url: string, info?: string){
		super(301, info);
		this.url = url;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.url);
	}

	url: string;
}

export class FoundHttpException extends CustomHttpException{
	constructor(url: string, info?: string){
		super(302, info);
		this.url = url;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.url);
	}

	url: string;
}

export class SeeOtherHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(303, info, data);
	}
}

export class NotModifiedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(304, info, data);
	}
}

export class TemporaryRedirectHttpException extends CustomHttpException{
	constructor(path: string, info?: string){
		super(307, info);
		this.path = path;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.path);
	}

	path: string;
}

export class PermanentRedirectHttpException extends CustomHttpException{
	constructor(path: string, info?: string){
		super(308, info);
		this.path = path;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.path);
	}

	path: string;
}


/*
	CODE 400
*/
export class BadRequestHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(400, info, data);
	}
}

export class UnauthorizedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(401, info, data);
	}
}

export class ForbiddenHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(403, info, data);
	}
}

export class NotFoundHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(404, info, data);
	}
}

export class MethodNotAllowedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(405, info, data);
	}
}

export class NotAcceptableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(406, info, data);
	}
}

export class ProxyAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(407, info, data);
	}
}

export class RequestTimeoutHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(408, info, data);
	}
}

export class ConflictHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(409, info, data);
	}
}

export class GoneHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(410, info, data);
	}
}

export class LengthRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(411, info, data);
	}
}

export class PreconditionFailedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(412, info, data);
	}
}

export class PayloadTooLargeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(413, info, data);
	}
}

export class UriTooLongHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(414, info, data);
	}
}

export class UnsupportedMediaTypeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(415, info, data);
	}
}

export class RangeNotSatisfiableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(416, info, data);
	}
}

export class ExpectationFailedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(417, info, data);
	}
}

export class ImATeapotHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(418, info, data);
	}
}

export class UpgradeRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(426, info, data);
	}
}

export class PreconditionRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(428, info, data);
	}
}

export class TooManyRequestsHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(429, info, data);
	}
}

export class RequestHeaderFieldsTooLargeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(431, info, data);
	}
}

export class UnavailableForLegalReasonsHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(451, info, data);
	}
}

/*
	CODE 500
*/
export class InternalServerErrorHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(500, info, data);
	}
}

export class NotImplementedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(501, info, data);
	}
}

export class BadGatewayHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(502, info, data);
	}
}

export class ServiceUnavailableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(503, info, data);
	}
}

export class GatewayTimeoutHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(504, info, data);
	}
}

export class HttpVersionNotSupportedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(505, info, data);
	}
}

export class VariantAlsoNegotiatesHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(506, info, data);
	}
}

export class NotExtendedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(510, info, data);
	}
}

export class NetworkAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(511, info, data);
	}
}
