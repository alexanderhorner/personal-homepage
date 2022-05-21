interface SubmitFunctionResponse {
    input:       Input;
    APIResponse: APIResponse;
}

interface APIResponse {
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

interface Body {
    locked: boolean;
}

interface Headers {
}

interface Input {
    name:    string;
    email:   string;
    message: string;
}


let form = document.querySelector("form")
let actionPath = "";
let formData = null;

var xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // @ts-ignore
    document.querySelector(".submit").disabled = true;

    formData = new FormData(form);
    actionPath = form.getAttribute("action")

    fetch(actionPath, {
        method: 'post',
        body: formData,
    }).then(response => {
            if (!response.status.toString().startsWith("2")) {
                throw 'HTTP Status code is not 2xx'
            }
            return response
        }).then(async response => {
            let jsonResponse:SubmitFunctionResponse = await response.json()
            console.log(jsonResponse)
            if (jsonResponse.APIResponse.status != 202) {
                throw 'E-Mail send api status code is not 202'
            }
            return response
        }).then(response => {
            // @ts-ignore
            document.querySelector(".success").style.display = "block"
            // @ts-ignore
            document.querySelector("form").style.display = "none"
            // @ts-ignore
            document.querySelector(".error").style.display = "none"
        }).catch(error => {
            console.log(error);
            // @ts-ignore
            document.querySelector(".error").style.display = "block"
            // @ts-ignore
            document.querySelector(".submit").disabled = false;
        });
});