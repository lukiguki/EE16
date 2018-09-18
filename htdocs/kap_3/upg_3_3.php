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
if(isset($_GET['fel'])){
    $fel = $_GET['fel'];
    if ($fel == 1){
        echo "<p>Tal 1 får inte vara större än tal 2</p>";
    }
}
?>
    <form action="upg_3_3b.php" method="post">
        <label for="anvnamn">Tal 1:</label><input type="text" name="nr1"><br>
        <label for="losenord">Tal 2:</label><input type="text" name="nr2"><br>
        <button>Se nr mellan</button>
    </form>
</body>

</html>