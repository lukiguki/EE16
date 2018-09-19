<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Formulär check</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
$namn = $_POST["namn"];
$address = $_POST["address"];
$postnr = $_POST["postnr"];
$postort = $_POST["postort"];

if (strlen($namn ==0)) {
    echo "<p>Varning tomt: Var god fyll i namnet."
}elseif (strlen($address ==0)) {
    echo "<p>Varning tomt: Var god fyll i namnet."
}elseif (strlen($postnr ==0)) {
    echo "<p>Varning tomt: Var god fyll i namnet."
}elseif (strlen($postnr ==0)) {
    echo "<p>Varning tomt: Var god fyll i namnet."
}
?>

<form action="#">
<label for="namn">Namn:</label><input type="text" name="namn"><br>
<label for="address">Address:</label><input type="text" name="address"><br>
<label for="postnr">Postnr:</label><input type="text" name="postnr"><br>
<label for="postort">Postort:</label><input type="text" name="postort"><br>
<button>Skicka</button>
</form>
</body>
</html>