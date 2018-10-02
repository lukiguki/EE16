<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tre slumpvalda ordspråk</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
$allaOrdsprak[] = "Att skiljas är att dö en smula.";
$allaOrdsprak[] = "Borta bra, men hemma bäst.";
$allaOrdsprak[] = "Det är mänskligt att fela.";
$allaOrdsprak[] = "Ingen ko på isen.";
$allaOrdsprak[] = "Man kan inte lära en gammal hund att sitta.";
$allaOrdsprak[] = "Små grytor har också öron.";
$allaOrdsprak[] = "Stor i orden, liten på jorden.";
$allaOrdsprak[] = "Tala är silver tiga är guld.";
$allaOrdsprak[] = "Tala inte med en dåre om en sten, om du inte vill ha den i huvudet.";
$allaOrdsprak[] = "Är man med i leken får man leken tåla.";

echo "<h3>Nummer 1</h3>";
$antalOrdsprak = count($allaOrdsprak);
echo "<p> Jag har $antalOrdsprak positioner i min array";

foreach ($allaOrdsprak as $ordsprak) {
    echo "<p>$ordsprak</p>";
}
echo "<h3>Nummer 2</h3>";
/* Skriv ut tre ordspråk */
for ($i=0; $i < 3; $i++) { 
    echo "<p>$allaOrdsprak[$i]</p>";
}
echo "<h3>Nummer 3</h3>";
/* skriv ut alla ordspråk med en for loop */
for ($i=0; $i < $antalOrdsprak; $i++) { 
    echo "<p>$allaOrdsprak[$i]</p>";
}
echo "<h3>Nummer 4</h3>";
$allaSlumtal = [];
for ($i=0; $i < 3; $i++) { 
$slumptal = rand(0, 9);

do{
    $slumptal = rand(0, 9);
} while (in_array($slumptal, $allaSlumtal));
    $allaSlumtal[] = $slumptal;
echo "<p>" . $allaOrdsprak[$slumpTal] . "</p>";
}

?>
    
</body>
</html>