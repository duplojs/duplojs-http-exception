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
		super(OkHttpException.code, info, data);
	}

	static readonly code = 200;
}

export class CreatedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(CreatedHttpException.code, info, data);
	}

	static readonly code = 201;
}

export class AcceptedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(AcceptedHttpException.code, info, data);
	}

	static readonly code = 202;
}

export class NoContentHttpException extends HttpException{
	constructor(info?: string){
		super(NoContentHttpException.code, info);
	}

	static readonly code = 204;
}

export class ResetContentHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ResetContentHttpException.code, info, data);
	}

	static readonly code = 205;
}

export class PartialContentHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(PartialContentHttpException.code, info, data);
	}

	static readonly code = 206;
}

/*
	CODE 300
*/
export class MultipleChoicesHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(MultipleChoicesHttpException.code, info, data);
	}

	static readonly code = 300;
}

export class MovedPermanentlyHttpException extends CustomHttpException{
	constructor(url: string, info?: string){
		super(MovedPermanentlyHttpException.code, info);
		this.url = url;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.url);
	}

	url: string;

	static readonly code = 301;
}

export class FoundHttpException extends CustomHttpException{
	constructor(url: string, info?: string){
		super(FoundHttpException.code, info);
		this.url = url;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.url);
	}

	url: string;

	static readonly code = 302;
}

export class SeeOtherHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(SeeOtherHttpException.code, info, data);
	}

	static readonly code = 303;
}

export class NotModifiedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NotModifiedHttpException.code, info, data);
	}

	static readonly code = 304;
}

export class TemporaryRedirectHttpException extends CustomHttpException{
	constructor(path: string, info?: string){
		super(TemporaryRedirectHttpException.code, info);
		this.path = path;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.path);
	}

	path: string;

	static readonly code = 307;
}

export class PermanentRedirectHttpException extends CustomHttpException{
	constructor(path: string, info?: string){
		super(PermanentRedirectHttpException.code, info);
		this.path = path;
	}

	handler(request: Request, response: Response){
		if(this.info)response.info(this.info);
		response.code(this.code).redirect(this.path);
	}

	path: string;

	static readonly code = 308;
}


/*
	CODE 400
*/
export class BadRequestHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(BadRequestHttpException.code, info, data);
	}

	static readonly code = 400;
}

export class UnauthorizedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(UnauthorizedHttpException.code, info, data);
	}

	static readonly code = 401;
}

export class ForbiddenHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ForbiddenHttpException.code, info, data);
	}

	static readonly code = 403;
}

export class NotFoundHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NotFoundHttpException.code, info, data);
	}

	static readonly code = 404;
}

export class MethodNotAllowedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(MethodNotAllowedHttpException.code, info, data);
	}

	static readonly code = 405;
}

export class NotAcceptableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NotAcceptableHttpException.code, info, data);
	}

	static readonly code = 406;
}

export class ProxyAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ProxyAuthenticationRequiredHttpException.code, info, data);
	}

	static readonly code = 407;
}

export class RequestTimeoutHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(RequestTimeoutHttpException.code, info, data);
	}

	static readonly code = 408;
}

export class ConflictHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ConflictHttpException.code, info, data);
	}

	static readonly code = 409;
}

export class GoneHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(GoneHttpException.code, info, data);
	}

	static readonly code = 410;
}

export class LengthRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(LengthRequiredHttpException.code, info, data);
	}

	static readonly code = 411;
}

export class PreconditionFailedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(PreconditionFailedHttpException.code, info, data);
	}

	static readonly code = 412;
}

export class PayloadTooLargeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(PayloadTooLargeHttpException.code, info, data);
	}

	static readonly code = 413;
}

export class UriTooLongHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(UriTooLongHttpException.code, info, data);
	}

	static readonly code = 414;
}

export class UnsupportedMediaTypeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(UnsupportedMediaTypeHttpException.code, info, data);
	}

	static readonly code = 415;
}

export class RangeNotSatisfiableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(RangeNotSatisfiableHttpException.code, info, data);
	}

	static readonly code = 416;
}

export class ExpectationFailedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ExpectationFailedHttpException.code, info, data);
	}

	static readonly code = 417;
}

export class ImATeapotHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ImATeapotHttpException.code, info, data);
	}

	static readonly code = 418;
}

export class UpgradeRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(UpgradeRequiredHttpException.code, info, data);
	}

	static readonly code = 426;
}

export class PreconditionRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(PreconditionRequiredHttpException.code, info, data);
	}

	static readonly code = 428;
}

export class TooManyRequestsHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(TooManyRequestsHttpException.code, info, data);
	}

	static readonly code = 429;
}

export class RequestHeaderFieldsTooLargeHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(RequestHeaderFieldsTooLargeHttpException.code, info, data);
	}

	static readonly code = 431;
}

export class UnavailableForLegalReasonsHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(UnavailableForLegalReasonsHttpException.code, info, data);
	}

	static readonly code = 451;
}

/*
	CODE 500
*/
export class InternalServerErrorHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(InternalServerErrorHttpException.code, info, data);
	}

	static readonly code = 500;
}

export class NotImplementedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NotImplementedHttpException.code, info, data);
	}

	static readonly code = 501;
}

export class BadGatewayHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(BadGatewayHttpException.code, info, data);
	}

	static readonly code = 502;
}

export class ServiceUnavailableHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(ServiceUnavailableHttpException.code, info, data);
	}

	static readonly code = 503;
}

export class GatewayTimeoutHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(GatewayTimeoutHttpException.code, info, data);
	}

	static readonly code = 504;
}

export class HttpVersionNotSupportedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(HttpVersionNotSupportedHttpException.code, info, data);
	}

	static readonly code = 505;
}

export class VariantAlsoNegotiatesHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(VariantAlsoNegotiatesHttpException.code, info, data);
	}

	static readonly code = 506;
}

export class NotExtendedHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NotExtendedHttpException.code, info, data);
	}

	static readonly code = 510;
}

export class NetworkAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, data?: unknown){
		super(NetworkAuthenticationRequiredHttpException.code, info, data);
	}

	static readonly code = 511;
}
