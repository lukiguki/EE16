<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inloggning</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<?php
if(isset($_GET['fel'])){
    $fel = $_GET['fel'];
    if ($fel == 1){
        echo "<p> Fel användarnamn eller lösenord. Vg försök igen!</p>";
    }
}

?>
    <form action="upg_3_2b.php" method="post">
        <label for="anvnamn">Användarnamn</label><input type="text" name="anvnamn"><br>
        <label for="losenord">Lösenord</label><input type="text" name="losenord">
        <button>Logga In</button>
    </form>
</body>

</html>