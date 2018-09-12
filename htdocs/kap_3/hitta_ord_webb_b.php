<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hitta ord på en webbsida</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
/* Ta emot data */
$url = $_POST["url"];
$sordet = $_POST["ordet"];


/* Läs in webbsida */
$innehall = file_get_contents($url);
$antal =1;
$pos = 1;

/* Hitta första position av ordet i texten */
while ($pos != false) {
    $pos = stripos($innehall, $sordet, $pos + 1);
    $antal++;
}



/* Skriv ut resultat */

echo "<p>Vi har hittat $sordet $antal gånger.</p>"
?>
</body>

</html>