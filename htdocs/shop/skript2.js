window.onload = start;

function start() {
    /* lyssna på click på hela sidan*/
    const elementKontainer = document.querySelector('.kontainer')
    elementKontainer.addEventListener('click', klick);

    function klick(e) {
        console.log('Nu har vi en klick event på ' + e.target.nodeName);

        if (e.target.nodeName === 'TD') {
            rakna(e.target);
        }

    }

    function rakna(cell) {
        console.log('Klick i en cell');
        const foralder = cell.parentNode.parentNode.parentNode.parentNode;
        const elementAntal = foralder.querySelector('#antal');
        const elementSumma = foralder.querySelector('#summa');

        const elementPris = foralder.querySelector('#stpris');

        const elementKorg = document.querySelector('#kostnad');
        const elementTotAntal = document.querySelector('#totAntal');
        var antal = parseInt(elementAntal.textContent);
        var pris = parseInt(elementPris.textContent);
        var summa = parseInt(elementSumma.textContent);
        var korgen = parseInt(elementKorg.textContent);
        var totAntal = parseInt(elementTotAntal.textContent);

        if (cell.id === 'plus') {
            antal++;
            /* räkna upp summa*/
            var summa = pris * antal;

            /* skriva tillbaka */
            elementAntal.textContent = antal;
            elementSumma.textContent = summa;
        }
        if (cell.id === 'minus') {
            if (antal > 1) {
                antal--;
            }

            var summa = pris * antal;

            /* skriva tillbaka */
            elementAntal.textContent = antal;
            elementSumma.textContent = summa;
        }
        if (cell.id === 'kop') {

            korgen = korgen + summa;
            totAntal = totAntal + antal;

            elementKorg.textContent = korgen + "kr";
            elementTotAntal.textContent = totAntal;
        }
    }
}