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
/* Controllera at post variablerna finns */

if(isset($_POST["nr1"]) && isset($_POST["nr2"])){
    /* Variablar */
    $nr1 = $_POST["nr1"];
    $nr2 = $_POST["nr2"];
    
    /* Skapar vad som ska skrivas */
    $mellan = $nr1;
    
    while ($mellan < $nr2) {
        $mellan ++;
        echo "<p>$mellan </p>";
    }
    
    if ($nr1 > $nr2) {
        echo "<p>Tal 1 får inte vara större än tal 2</p>";
    }
}

?>
    <form action="#" method="post">
        <label for="anvnamn">Tal 1:</label><input type="text" name="nr1"><br>
        <label for="losenord">Tal 2:</label><input type="text" name="nr2"><br>
        <button>Se nr mellan</button>
    </form>
</body>

</html>