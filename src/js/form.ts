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

function getGoogleCaptchaToken() { 
    return new Promise((resolve, reject) => {
        grecaptcha.enterprise.ready(async () => {
            const token = await grecaptcha.enterprise.execute('6LeyVLEfAAAAACOQ-LvNhzgJf94CsQfG9ltauUxV', {action: 'LOGIN'});
            resolve(token)
        })
    })
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    formData = new FormData(form)

    // @ts-ignore
    document.querySelector(".submit").disabled = true;

    const token = await getGoogleCaptchaToken()
    console.log(token);
    

    formData.append('googlecaptcha-token', token)
    formData.append('googlecaptcha-site-key', '6LeyVLEfAAAAACOQ-LvNhzgJf94CsQfG9ltauUxV')

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
            console.error(`E-Mail Form Error: ${error}`);
            // @ts-ignore
            document.querySelector(".error").style.display = "block"
            // @ts-ignore
            document.querySelector(".submit").disabled = false;
        });
});
