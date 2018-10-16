/* När webbsidan laddats klart kör start */
window.onload = start;

function start() {
    /* anslut till elementen */
    const elementTable = document.querySelector('table');
    console.log('Jag har hittat elementet:', elementTable);

    const elementPlus = document.querySelector('#plus');
    console.log(elementPlus);

    const elementMinus = document.querySelector('#minus');
    console.log(elementMinus);

    const elementKop = document.querySelector('#kop');
    console.log(elementKop);

    const elementSumma = document.querySelector('#summa');
    console.log(elementSumma);

    const elementPris = document.querySelector('#stpris');
    console.log(elementPris);

    /* lyssna på händelser */
    elementPlus.addEventListener('click', plus);
    elementMinus.addEventListener('click', minus);
    elementKop.addEventListener('click', kop);

    /* räkna upp antal varor */
    function plus() {
        /* läs av antal */
        const elementAntal = document.querySelector('#antal');
        var antal = elementAntal.textContent;
        var pris = elementPris.textContent;

        
        /* räkna upp */
        antal++;
        /* räkna upp summa*/
        summa = pris * antal;

        /* skriva tillbaka */
        elementAntal.textContent = antal;
        elementSumma.textContent = summa;

    }
    function minus() {
        
        /* läs av antal */
        const elementAntal = document.querySelector('#antal');
        var antal = elementAntal.textContent;

        
        /* räkna upp */
        if (antal > 1) {
            antal--;
        }

        /* skriva tillbaka */
        elementAntal.textContent = antal;
    }
    function kop() {
        
    }
}