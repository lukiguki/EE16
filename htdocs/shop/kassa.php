<?php
/*
* Läsa in alla varor och skapa en lista 
* på alla varor.
*
* PHP version 7
* @category   Webbshop
* @author     Lukas Kirby <lukas.kirby@hotmail.com>
* @license    PHP CC
*/
?>
<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Alla varor</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="kontainer kassa">
        <header>
            <h1>Kassan</h1>
            </form>
        </header>
        <main>
            <?php
if(isset($_POST["antalVaror"]) && isset($_POST["total"]) && isset($_POST["korgen"])){
    $antalVaror = $_POST["antalVaror"];
    $total = $_POST["total"];
    $korgen = $_POST["korgen"];

    echo "<p>Antal varor: $antalVaror</p>";
    echo "<p>Total: $total</p>";


    $listaVaror = json_decode($korgen);
    echo "<table>";
    echo "<tr>
        <th>Beskrivning</th>
        <th>Antal</th>
        <th>Styckpris</th>
        <th>Summa</th>
        </tr>
        ";
    foreach ($listaVaror as $vara) {
        echo "<tr>";
        echo "<td>$vara->beskrivning</td>";
        echo "<td>$vara->antal</td>";
        echo "<td>$vara->pris</td>";
        echo "<td>$vara->summa</td>";
        echo "</tr>";
    }
    echo "</table>";
    echo "<div class=\"total\">";
    echo "<p>Antal Varor: $antalVaror</p>";
    echo "<p>Total Summa: $total</p>";
    echo "</div>";
    
}
?>
        </main>
        <footer>
            Lukas Kirby 2018
        </footer>
    </div>
    <script src="skript2.js"></script>
</body>

</html>