let form = document.querySelector("form")
let actionPath = "";
let formData = null;

var xhr = new XMLHttpRequest();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    formData = new FormData(form);
    actionPath = form.getAttribute("action");

    xhr.open("POST", actionPath);
    xhr.send(formData);

    fetch('actionPath', {
        method: 'post',
        body: formData,
    }).then(response => {
            // @ts-ignore
            document.querySelector(".success").style.display = "block"
            // @ts-ignore
            document.querySelector(".form").style.display = "none"
            
            console.log(response.json())
        })
        .catch(error => {
            console.log(error);
            // @ts-ignore
            document.querySelector(".error").style.display = "block"
        });
});
