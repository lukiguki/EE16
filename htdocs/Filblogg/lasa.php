<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Läs inlägg</title>
    <link rel="stylesheet" href="./css/flatly.epic.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<div class="kontainer">
<header>
<?php include "header.inc" ?>
</header>
<main>
<?php

/* öppna texfil och läsa innehållet och skriv ut det */

$allaRader = file("inlaggen.txt");
foreach ($allaRader as $rad) {
    echo $rad . "<br>";
}
?>
</main>
<footer>Lukas Kirby 2018</footer>
</div>


</body>
</html>