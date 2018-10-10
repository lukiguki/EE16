<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Läs inlägg</title>
    <link rel="stylesheet" href="./css/flatly.epic.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="kontainer">
        <header>
            <h1>Alla Varor</h1>
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
    \n<p>$pris kr</p>
    \n<hr>
\n</div>";
}
?>
        </main>
        <footer>Lukas Kirby 2018</footer>
    </div>


</body>

</html>