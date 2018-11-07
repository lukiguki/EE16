<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Skicka mail</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="kontainer mail">
        <header>
            <h1>Skicka mail</h1>
        </header>
        <?php
if(isset($_POST['adressat']) && isset($_POST['rubrik']) && isset($_POST['meddelande'])){
    $adressat = $_POST['adressat'];
    $rubrik = $_POST['rubrik'];
    $meddelande = $_POST['meddelande'];
    
    /* Prova skicka mail */
    mail($adressat, $rubrik, $meddelande);
    echo "<p>Mail skickat till $adressat</p>";
}
?>
        <form action="#" method="post">
            <label for="adressat">Adressat</label><input type="text" name="adressat" id="adressat"><br>
            <label for="rubrik">Rubrik</label><input type="text" name="rubrik" id="rubrik"><br>
            <label for="meddelande">Meddelande</label><textarea name="meddelande" id="meddelande"></textarea><br>
            <button type="submit">Skicka mail</button>
</form>
</div>
</body>
</html>