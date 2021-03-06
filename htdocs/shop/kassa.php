
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
<?php
session_start();
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
        <h1>Shopsmart</h1>
        </header>
        <main>
            <?php

    $antalVaror = filter_input(INPUT_POST, "antalVaror", FILTER_SANITIZE_NUMBER_INT);
    $total = filter_input(INPUT_POST, "total", FILTER_SANITIZE_NUMBER_INT);
    $korgen = json_decode($_POST['korgen']);
    if($antalVaror && $total && $korgen){

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
        $beskrivning = filter_var($vara->beskrivning, FILTER_SANITIZE_STRING);
        $antal = filter_var($vara->antal, FILTER_SANITIZE_NUMBER_INT);
        $pris = filter_var($vara->pris, FILTER_SANITIZE_NUMBER_INT);
        $summa = filter_var($vara->summa, FILTER_SANITIZE_NUMBER_INT);

        echo "<tr>";
        echo "<td>$beskrivning</td>";
        echo "<td>$antal</td>";
        echo "<td>$pris</td>";
        echo "<td>$summa</td>";
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