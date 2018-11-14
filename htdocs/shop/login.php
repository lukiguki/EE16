<?php
session_start();
?>
<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inloggning</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="kontainer nyVara">
        <header>
            <nav>
                <a href="./nya_varor.php">Ny vara</a>
                <?php
        if (!isset($_SESSION['anamn'])){
            echo "<a href=\"./login.php\">Logga in</a>";
        } else{
            echo "<a href=\"./logout.php\">Logga ut</a>";
        }
        ?>
                <a href="./kassa.php">Handla vara</a>
            </nav>
        </header>
        <?php
    $anamn = filter_input(INPUT_POST, 'anamn', FILTER_SANITIZE_STRING);
    $losenord = filter_input(INPUT_POST, 'losenord', FILTER_SANITIZE_STRING);

    /* kontrollera användarnamn och lösenord */
    

    if($anamn == "lukas" && $losenord == "kirby"){
        $_SESSION['anamn'] = "lukas";
        header('Location: nya_varor.php');
        exit;
    }


?>
        <form action="login.php" method="post">
            <label for="anamn">Användarnamn</label><input type="text" name="anamn"><br>
            <label for="losenord">Lösenord</label><input type="password" name="losenord">
            <button>Logga In</button>
        </form>
    </div>
</body>

</html>