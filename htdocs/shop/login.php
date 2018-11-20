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
if(isset($_POST['anamn']) && isset($_POST['losenord'])){
    $anamn = filter_input(INPUT_POST, 'anamn', FILTER_SANITIZE_STRING);
    $losenord = filter_input(INPUT_POST, 'losenord', FILTER_SANITIZE_STRING);
    
    /* läs admin.txt rad för rad */
    $allaRader = file($_SERVER['DOCUMENT_ROOT'] . '/../config/admin.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    /* Loopa igenom rad-för-rad */
    foreach ($allaRader as $rad) {
        
        /* Plocka isär raden i dess beståndsdelar */
        $delar = explode('¤', $rad);
        
        
        /* plocka ut användarnamnet och hashet */
        $namn = $delar[0];
        $hash = $delar[1];
        
        /* hitta användarnamnet och sen jämför hashen */
        if ($anamn == $namn) {
            if (password_verify($losenord, $hash)) {
                /* success */
                $_SESSION['anamn'] = "lukas";
                header('Location: nya_varor.php');
                exit;
            } else {
                echo "<p>Fel lösenord</p>";
            }
        } else {
            echo "<p>Fel användarnamn</p>";
        }
    }
    
    /* kontrollera användarnamn och lösenord */
    
    
    if($anamn == "lukas" && $losenord == "kirby"){
        
    }
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