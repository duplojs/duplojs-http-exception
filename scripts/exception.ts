import {Request, Response} from "@duplojs/duplojs";

export abstract class HttpException{
	code: number;
	info?: string;
	body?: unknown;

	/** @deprecated */
	get data(){
		return this.body;
	}

	constructor(code: number, info?: string, body?: unknown){
		this.code = code;
		this.info = info;
		this.body = body;
	}
}

export abstract class CustomHttpException extends HttpException{
	constructor(code: number, info?: string, body?: unknown){
		super(code, info, body);
	}

	abstract handler(request: Request, response: Response): void
}

/*
	CODE 200
*/
export class OkHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(OkHttpException.code, info, body);
	}

	static readonly code = 200;
}

export class CreatedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(CreatedHttpException.code, info, body);
	}

	static readonly code = 201;
}

export class AcceptedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(AcceptedHttpException.code, info, body);
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
	constructor(info?: string, body?: unknown){
		super(ResetContentHttpException.code, info, body);
	}

	static readonly code = 205;
}

export class PartialContentHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(PartialContentHttpException.code, info, body);
	}

	static readonly code = 206;
}

/*
	CODE 300
*/
export class MultipleChoicesHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(MultipleChoicesHttpException.code, info, body);
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
	constructor(info?: string, body?: unknown){
		super(SeeOtherHttpException.code, info, body);
	}

	static readonly code = 303;
}

export class NotModifiedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NotModifiedHttpException.code, info, body);
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
	constructor(info?: string, body?: unknown){
		super(BadRequestHttpException.code, info, body);
	}

	static readonly code = 400;
}

export class UnauthorizedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(UnauthorizedHttpException.code, info, body);
	}

	static readonly code = 401;
}

export class ForbiddenHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ForbiddenHttpException.code, info, body);
	}

	static readonly code = 403;
}

export class NotFoundHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NotFoundHttpException.code, info, body);
	}

	static readonly code = 404;
}

export class MethodNotAllowedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(MethodNotAllowedHttpException.code, info, body);
	}

	static readonly code = 405;
}

export class NotAcceptableHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NotAcceptableHttpException.code, info, body);
	}

	static readonly code = 406;
}

export class ProxyAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ProxyAuthenticationRequiredHttpException.code, info, body);
	}

	static readonly code = 407;
}

export class RequestTimeoutHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(RequestTimeoutHttpException.code, info, body);
	}

	static readonly code = 408;
}

export class ConflictHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ConflictHttpException.code, info, body);
	}

	static readonly code = 409;
}

export class GoneHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(GoneHttpException.code, info, body);
	}

	static readonly code = 410;
}

export class LengthRequiredHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(LengthRequiredHttpException.code, info, body);
	}

	static readonly code = 411;
}

export class PreconditionFailedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(PreconditionFailedHttpException.code, info, body);
	}

	static readonly code = 412;
}

export class PayloadTooLargeHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(PayloadTooLargeHttpException.code, info, body);
	}

	static readonly code = 413;
}

export class UriTooLongHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(UriTooLongHttpException.code, info, body);
	}

	static readonly code = 414;
}

export class UnsupportedMediaTypeHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(UnsupportedMediaTypeHttpException.code, info, body);
	}

	static readonly code = 415;
}

export class RangeNotSatisfiableHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(RangeNotSatisfiableHttpException.code, info, body);
	}

	static readonly code = 416;
}

export class ExpectationFailedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ExpectationFailedHttpException.code, info, body);
	}

	static readonly code = 417;
}

export class ImATeapotHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ImATeapotHttpException.code, info, body);
	}

	static readonly code = 418;
}

export class UpgradeRequiredHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(UpgradeRequiredHttpException.code, info, body);
	}

	static readonly code = 426;
}

export class PreconditionRequiredHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(PreconditionRequiredHttpException.code, info, body);
	}

	static readonly code = 428;
}

export class TooManyRequestsHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(TooManyRequestsHttpException.code, info, body);
	}

	static readonly code = 429;
}

export class RequestHeaderFieldsTooLargeHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(RequestHeaderFieldsTooLargeHttpException.code, info, body);
	}

	static readonly code = 431;
}

export class UnavailableForLegalReasonsHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(UnavailableForLegalReasonsHttpException.code, info, body);
	}

	static readonly code = 451;
}

/*
	CODE 500
*/
export class InternalServerErrorHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(InternalServerErrorHttpException.code, info, body);
	}

	static readonly code = 500;
}

export class NotImplementedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NotImplementedHttpException.code, info, body);
	}

	static readonly code = 501;
}

export class BadGatewayHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(BadGatewayHttpException.code, info, body);
	}

	static readonly code = 502;
}

export class ServiceUnavailableHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(ServiceUnavailableHttpException.code, info, body);
	}

	static readonly code = 503;
}

export class GatewayTimeoutHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(GatewayTimeoutHttpException.code, info, body);
	}

	static readonly code = 504;
}

export class HttpVersionNotSupportedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(HttpVersionNotSupportedHttpException.code, info, body);
	}

	static readonly code = 505;
}

export class VariantAlsoNegotiatesHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(VariantAlsoNegotiatesHttpException.code, info, body);
	}

	static readonly code = 506;
}

export class NotExtendedHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NotExtendedHttpException.code, info, body);
	}

	static readonly code = 510;
}

export class NetworkAuthenticationRequiredHttpException extends HttpException{
	constructor(info?: string, body?: unknown){
		super(NetworkAuthenticationRequiredHttpException.code, info, body);
	}

	static readonly code = 511;
}
