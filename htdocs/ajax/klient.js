window.onload = start();

function start() {
    const eInput = document.querySelector("input");
    const eTextarea = document.querySelector("textarea");
    const eButton = document.querySelector("buttom");
    let url = "http://10.151.171.209/ajax/klient.php";

    eButton.addEventListener("click", skicka);
    function sicka() {
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("loadend", svar);
        function svar() {
            console.log(this.responseText);
        }
        ajax.open("POST", url, true);
        let formData = new FormData();
        formData.append("namn", eInput.value);
        formData.append("meddelande", eTextarea.value);
        ajax.send(formData);
    }
}