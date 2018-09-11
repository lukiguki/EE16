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
$temp = $_POST["temp"];
$omvandla = $_POST["omvandla"];

/* Om f2c */
if ($omvandla == 'f2c'){
    $celsius = ($temp - 32) * 5 / 9;
    
    /* Skriv ut resultat */
    echo "<p>Tempuraturen är $celsius i Celsius.</p>";
} else{
    $farenheit = 9 / 5 *$temp + 32;
    
    /* Akriv ut resultaten */
    echo "<p>Tempuraturen är $farenheit i Farenheit.</p>";
}
?>
</body>

</html>