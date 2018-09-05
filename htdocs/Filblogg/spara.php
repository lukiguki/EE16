<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
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
/* Ta emot text från formuläret och spara ned i en textfil */


$texten = $_POST["inlagg"];
$tidpunkt = date('l j F Y h:i:s');


$handtag = fopen("inlaggen.txt", 'a');
fwrite($handtag, "<p>" . $tidpunkt . "<br>" . $texten . "\n" . "</p>");

echo "<p> inlägget har sparats</p>";

fclose($handtag);

?>
</main>
<footer>
Lukas Kirby 2018
</footer>
</div>
</body>
</html>

