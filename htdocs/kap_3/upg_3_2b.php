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
    /* ta emot data */
    $namn = $_POST["anvnamn"];
    $losenord = $_POST["losenord"];

    /* kontrollera användarnamn och lösenord */
    

    if($namn == "lukas" && $losenord == "kirby"){
        echo "$namn, du är inloggad";
    } else{
        header('Location: upg_3_2.php?fel=1');
        die();
    }
    ?>
</body>
</html>