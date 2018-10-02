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
if(isset($_POST["namn"]) && isset($_POST["lon"]) && isset($_POST["skatt"])){
    /* variablar */
    $namn = $_POST["namn"];
    $lon = $_POST["lon"];
    $skatt = $_POST["skatt"];
    
    /* uträkning variablar */
    $procent = 100 - $skatt;
    $ovtio = $procent / 100;
    
    /* Uträkning för lön */
    /* uträkning om lön är rätt */
    if ($lon < 45000 && $lon > 10000){
        /* uträkningen om skatten är under 10%*/
        if ($skatt < 10) {
            echo "<p>Skatten måste vara över 10%. Du skrev $skatt %</p>";
            /* uträkning om skatt är över 45% */
        }elseif ($skatt > 45) {
            echo "<p>Skatten måste vara under 45%. Du skrev $skatt %</p>";
            /* uträkning om skatt korrekt */
        }elseif ($skatt > 10) {
            $netto = $lon * $ovtio;
            echo "<p><b>Lönebesked:</b>
            $namn s lön är $netto kr efter skatt.<br>
            Beräkning baserat på bruttolön $lon kr och skattesatsen $skatt %.</p>";
        }
        /* felmeddelande om lön är fel */
    }else{
        echo "<p>Din lön måste vara under 45000kr eller över 10000kr.</p>";
    }
    
    
}

?>
    <form action="#" method="post">
        <label for="namn">Namn:</label><input type="text" name="namn"><br>
        <label for="lon">Brutto lön:</label><input type="number" name="lon"><br>
        <label for="skatt">Skatt:</label><input type="number" name="skatt"><br>
        <button>Skicka</button>
    </form>
</body>

</html>