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
$nr1 = $_POST["nr1"];
$nr2 = $_POST["nr2"];

/* Skapar vad som ska skrivas */
$mellan = $nr1;

while ($mellan < $nr2) {
    $mellan ++;
    echo "<p>$mellan </p>";
}

if ($nr1 > $nr2) {
    header('Location: upg_3_3.php?fel=1');
    die();
}
?>
</body>

</html>