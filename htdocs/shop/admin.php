<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Registrera administratör</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Shopsmart</h1>
    </header>
    <main>
    <?php
    if(isset($_POST['anamn']) && isset($_POST['losenord'])){

    $anamn = filter_input(INPUT_POST, 'anamn', FILTER_SANITIZE_STRING);
    $losenord = filter_input(INPUT_POST, 'losenord', FILTER_SANITIZE_STRING);
       /* spara ned ny rad som anamn¤losen */
       $handtag = fopen($_SERVER['DOCUMENT_ROOT'] . '/../config/admin.txt', 'a');
       $hash = password_hash($losenord, PASSWORD_DEFAULT);
    fwrite($handtag, $anamn . "¤" . $hash . PHP_EOL);
    fclose($handtag);
    echo "<script>alert('Användarnamn har registrerats');</script>";
   }


?>
    <form action="admin.php" method="post">
            <label for="anamn">Användarnamn</label><input type="text" name="anamn"><br>
            <label for="losenord">Lösenord</label><input type="password" name="losenord">
            <button>Registrera</button>
        </form>
    </main>
    <footer>

    </footer>
</body>
</html>