<?php
/*
* Gör ett formulär där användaren ska fylla i namn, adress, postnr och postort.

* Kontrollera att alla fälten är ifyllda, och innehåller minst 3 tecken.
* Kontrollera att postnumret innehåller 5 tecken och att de tecknen endast är siffror.


* PHP version 7
* @category   Formulär
* @author     Lukas Kirby
* @license    PHP CC
*/
?>
<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulär check</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.0/dist/mini-default.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Check</h1>
    <?php
$fel = 0;

if(isset($_POST["namn"]) && isset($_POST["address"]) && isset($_POST["postnr"]) 
&& isset($_POST["postort"]) && isset($_POST["epost"])){
    $namn = $_POST["namn"];
    $address = $_POST["address"];
    $postnr = $_POST["postnr"];
    $postort = $_POST["postort"];
    $epost = $_POST["epost"];    

    $postnr = str_replace($postnr, " ", "");
    
    if (strlen($namn) < 3) {
        echo "<p>Varning tomt: Var god fyll i namnet.</p>";
        $fel++;
    }
    if (strlen($address) < 3) {
        echo "<p>Varning tomt: Var god fyll i address.</p>";
        $fel++;
    }
    if (strlen($postnr) < 5) {
        echo "<p>Varning tomt: Var god fyll i post nummer.</p>";
        $fel++;
    }
    if (strlen($postort) < 3) {
        echo "<p>Varning tomt: Var god fyll i postort.</p>";
        $fel++;
    }
    if (strlen($epost) < 6) {
        echo "<p>Varning tomt: Var god fyll i epost.</p>";
        $fel++;
    }
    if (strpos($epost, "@") == false) {
        echo "<p>Varning tomt: Var god fyll i epost.</p>";
        $fel++;
    }
}
if ($fel == 0) {
    ?>
    <form action="#" method="post">
        <label for="namn">Namn:</label><input type="text" name="namn" value=""><br>
        <label for="address">Address:</label><input type="text" name="address" value=""><br>
        <label for="postnr">Postnr:</label><input type="number" name="postnr" value=""><br>
        <label for="postort">Postort:</label><input type="text" name="postort" value=""><br>
        <label for="epost">EPost:</label><input type="text" name="epost" value=""><br>
        <button>Skicka</button>
    </form>
    <?php
    
}else {
    ?>
    <form action="#" method="post">
        <label for="namn">Namn:</label><input type="text" name="namn" value="<?php echo $namn;?>"><br>
        <label for="address">Address:</label><input type="text" name="address" value="<?php echo $address;?>"><br>
        <label for="postnr">Postnr:</label><input type="number" name="postnr" value="<?php echo $postnr;?>"><br>
        <label for="postort">Postort:</label><input type="text" name="postort" value="<?php echo $postort;?>"><br>
        <label for="epost">EPost:</label><input type="text" name="epost" value="<?php echo $post;?>"><br>
        <button>Skicka</button>
    </form>
    <?php
}
?>

</body>

</html>