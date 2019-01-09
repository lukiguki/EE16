window.onload = start;

function start(){
    const eTextarea = document.querySelector("#chatt");

    setInterval(uppdateraChatten, 1000);
    function uppdateraChatten() {
        /* Anropa ett php script som läser av chatt-txt */
        let ajax = new XMLHttpRequest();
        ajax.addEventListener("loadend", skrivUt);
        function skrivUt() {
            eTextarea.textContent = this.responawText;
            ajax.open("POST", "read.php", true);
            ajax.send();
        }
    }
}