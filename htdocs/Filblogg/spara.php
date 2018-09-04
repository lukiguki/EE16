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
/* Ta emot text från formuläret och spara ned i en textfil */


$texten = $_POST["inlagg"];


$handtag = fopen("inlaggen.txt", 'a');
fwrite($handtag, $texten . "\n");

echo "<p> inlägget har sparats</p>";

fclose($handtag);

?>
</body>
</html>

