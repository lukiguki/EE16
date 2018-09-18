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
if(isset($_POST["tal"])){
    
    $tal = $_POST["tal"];
    
    for ($i-1; $i <= $tal; $_FILESi++){
        if($i*$i < 50){
        echo $i . " " . $i*$i;
        }
    }
}
?>

    <form action="#" method="post">
        <label for="anvnamn">Tal:</label><input type="text" name="tal"><br>
        <button>Se nr mellan</button>
    </form>
</body>

</html>