<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php

    $url = "https://astro.elle.se/";

    /* ladda ner hemsidan */
    $sidan = file_get_contents($url);

    /* Leta rätt på början av horoskopet */
    $start = strpos($sidan, "Väduren");

    /* Leta slutet på horoskopet */
    $slut = strpos($sidan, "post-pagelink");

    /* plocka ut koden */
    $length = $slut - $start;
    $horoskop = substr($sidan, $start, $length);

    /* skriv horoskopet */
    echo $horoskop;

    ?>
</body>
</html>