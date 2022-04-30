export interface SubmitFunctionResponse {
    input:       Input;
    APIResponse: APIResponse;
}

export interface APIResponse {
    webSocket:  null;
    url:        string;
    redirected: boolean;
    ok:         boolean;
    headers:    Headers;
    statusText: string;
    status:     number;
    bodyUsed:   boolean;
    body:       Body;
}

export interface Body {
    locked: boolean;
}

export interface Headers {
}

export interface Input {
    name:    string;
    email:   string;
    message: string;
}
