// Allow to create complex object without getting lost halfway

class HTTPRequest {
	constructor(
		public url: string,
		public method: string,
		public headers: Record<string, string>[],
		public queryParams: Record<string, any>[],
		public body: any,
		public timeout: number,
		public retries: number,
		public validateStatus: boolean,
		public cache: boolean | undefined,
		public followedRedirect: boolean
	) {}
}

const request = new HTTPRequest(
	'https://api.example.com',
	'POST',
	{ Authorization: 'Bearer token' },
	{ userId: 123 },
	{ name: 'John' },
	30000,
	3,
	true,
	undefined,
	false
	// ... what do these even mean anymore
);

class RequestBuilder {
	url: string = '';
	method: string = 'GET';
	headers: Record<string, string>[] = [];
	queryParams: Record<string, any>[] = [];
	body: any = null;
	timeout: number = 5000;
	retries: number = 0;

	setUrl(url: string): RequestBuilder {
		this.url = url;
		return this;
	}

	setMethod(
		method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	): RequestBuilder {
		this.method = method;
		return this;
	}

	addHeader(header: Record<string, string>): RequestBuilder {
		this.headers = [...this.headers, header];
		return this;
	}

	addQueryParams(queryParam: Record<string, any>): RequestBuilder {
		this.queryParams = [...this.queryParams, queryParam];
		return this;
	}

	setBody(body: any): RequestBuilder {
		this.body = body;
		return this;
	}

	setTimeout(timeout: number): RequestBuilder {
		this.timeout = timeout;
		return this;
	}

	setRetries(retries: number): RequestBuilder {
		this.retries = retries;
		return this;
	}

	build(): HTTPRequest {
		return new HTTPRequest(
			this.url,
			this.method,
			this.headers,
			this.queryParams,
			this.body,
			this.timeout,
			this.retries,
			true,
			undefined,
			false
		);
	}
}

const betterRequest = new RequestBuilder()
	.setUrl('http://api.example.com')
	.setMethod('POST')
	.addHeader({ authorization: 'bearer token' })
	.setTimeout(15000)
	.setRetries(3)
	.build();