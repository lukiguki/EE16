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
$nordet = $_POST["nordet"];


/* Läs in webbsida */
$gammlasida = file_get_contents($url);

$antal =1;
$start = 0;
$slut = 1;

/* Hitta första position av ordet i texten */
$nyasida = str_replace($sordet, $nordet, $gammlasida);

file_put_contents("test.html", $nyasida);

/* foreach ($pos as $word) {
    if ($words == $sordet) {
        $nyasida = $nyasida . $nordet;
    } else{
        $nyasida = $nyasida . $word;
    }
} */



/* Skriv ut resultat */

echo "$nyasida";
?>
</body>

</html>