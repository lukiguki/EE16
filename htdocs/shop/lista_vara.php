<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Läs inlägg</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="kontainer">
        <header>
            <h1>Alla Varor</h1>
            <div id="korgen"><span id="kostnad">0<span>kr</div>
        </header>
        <main>
            <?php

/* öppna texfil och läsa innehållet och skriv ut det */

$allaRader = file("beskrivnig.txt");
foreach ($allaRader as $rad) {
    
    /* plocka isär raden i dess beståndsdelar */
    $delar = explode('¤', $rad);
    $namn = $delar[0];
    $pris = $delar[1];
    $bild = $delar[2];
    
    /* Skriv ut info och HTML */
    echo "<div class=\"vara\">
    \n<img src=\"./varor/$bild\" alt=\"$namn\">
    \n<p>$namn</p>
    \n<p>Styckpris: <span id=\"stpris\">$pris</span> kr</p>
    \n<p>Summa: <span id=\"summa\">$pris</span> kr</p>

    \n<table>
    \n<tr>
    \n<td id=\"antal\" rowspan=\"2\">1</td>
    \n<td id=\"plus\">+</td>
    \n<td rowspan=\"2\" id=\"kop\">KÖP</td>
    \n</tr>
    \n<tr>
    \n<td id=\"minus\">-</td>
    \n</tr>
    \n</table>
    \n</div>";
}
?>
        </main>
        <footer>Lukas Kirby 2018</footer>
    </div>
    <script src="skript.js"></script>
</body>

</html>