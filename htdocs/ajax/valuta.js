window.onload = start;

function start() {
    const url = "https://openexchangerates.org/api/latest.json";
    const appid = "6e2d972d942e4319ad5a8a5861e81dd3";

    const eBelopp = document.querySelector('#belopp');
    const eValuta = document.querySelector('#valuta');
    const eResultat = document.querySelector('#resultat');

    eValuta.addEventListener("change", vaxla);

    function vaxla() {
        console.log('Testar!');
        let belopp = eBelopp.nodeValue;
        console.log(belopp);
        let valuta = eValuta.nodeValue;
        console.log(valuta);

        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                console.log(this.responseText);
                let kurs = JSON.parse(this.responseText);
                console.log(kurs.rates[valuta]);
                eResultat.value = belopp * kurs.rates[valuta];
            }
        };
        ajax.open("GET", url + "?app_id=" + appid, true);
        ajax.send("SYMBOLS=NOK,DKK,SEK,EUR,GBP,JPY");
    }
}