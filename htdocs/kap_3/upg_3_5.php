<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Låne kalkylator</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
if(isset($_POST["ar1"]) . isset($_POST["lan"]) . isset($_POST["ranta"])){
    
    $ar = $_POST["ar"];
    $lan = $_POST["lan"];
    $ranta = $_POST["ranta"];

    $rantaB = "1.0$ranta";

    $ranta1 = $lan*$rantaB;
    $ranta2 = $lan*$rantaB*$rantaB*$rantaB;
    $ranta3 = $lan*$rantaB*$rantaB*$rantaB*$rantaB*$rantaB;;
    
    if ($ar == "ar1") {
        echo "<p>Du ska betala $ranta1</p>";
    } elseif ($ar == "ar3") {
        echo "<p>Du ska betala $ranta2</p>";
    }elseif($ar == "ar5") {
        echo "<p>Du ska betala $ranta3</p>";
    }
}
?>

    <form action="#" method="post">
        <label for="ar">1 år:</label><input type="radio" name="ar" value="ar1"><br>
        <label for="ar">3 år:</label><input type="radio" name="ar" value="ar3"><br>
        <label for="ar">5 år</label><input type="radio" name="ar" value="ar5"><br>
        <label for="lan">Låne mängd:</label><input type="text" name="lan"><br>
        <label for="ranta">Ränta:</label><input type="text" name="ranta"><br>
        <button>Se nr mellan</button>
    </form>
</body>

</html>