
<?php/* 
*
 */
?>
<?php
session_start();
if (!isset($_SESSION['anamn'])) {
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Filuppladdning</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="kontainer nyVara">
<header>
<h1>Shopsmart</h1>
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
/* Kolla att man har klickat på knappen 'submit' */
if (isset($_POST['submit'])) {
    $filen =  $_FILES['file'];
    $beskrivning =  $_POST['beskrivning'];
    $pris =  $_POST['pris'];
    /* Ladda upp bilden */

    /* print_r($filen); */
    /* Plocka ut filnamnet */
    $fileName = $filen['name'];
    /* echo "<p>Filens namn är $fileName</p>"; */
    /* Plocka ut filtypen */
    $fileType = $filen['type'];
    /* echo "<p>Filens filtyp är $fileType</p>"; */
    /* Plocka ut filtypen */
    $fileTempName = $filen['tmp_name'];
    /* echo "<p>Filens temporära namn är $fileTempName</p>"; */
    /* Plocka ut filstorleken */
    $fileSize = $filen['size'];
    /* echo "<p>Filens storlek i byte är $fileSize</p>"; */
    /* Plocka ut felmeddelande */
    $fileError = $filen['error'];
    echo "<p>Filens felmeddelande är $fileError</p>";
    /* Plocka ut filändelse */
    $fileExt = explode('image/', $fileType);
    /* echo "<p>Filens filändelse är $fileExt[1]</p>"; */
    /* Tillåtna filtyper att laddat upp */
    $allowedType = ['jpeg', 'png', 'gif', 'pdf'];
    /* Felmeddelanden */
    $errors = array(
        1 => 'The uploaded file exceeds the upload_max_filesize directive in php.ini.',
        2 => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.',
        3 => 'The uploaded file was only partially uploaded.',
        4 => 'No file was uploaded.',
        6 => 'Missing a temporary folder.',
        7 => 'Failed to write file to disk.',
        8 => 'A PHP extension stopped the file upload.',
    );
    /* Är filen tillåten att ladda upp? */
    if (in_array($fileExt[1], $allowedType)) {
        echo "<p>Tillåten filtyp</p>";
        /* Nästa steg - blev något fel? */
        if ($fileError == 0) {
            /* Skapa nytt unikt filnamn för att inte skriva filer med samma namn */
            $fileNewName = uniqid('', true) . '.' . $fileExt[1];
            /* Hela sökvägen till den nya filen */
            $fileDestination = "./varor/$fileNewName";
            echo "<p>$fileDestination</p>";
            /* Flytta filen rätt */
            move_uploaded_file($fileTempName, $fileDestination);
            echo "<p>Uppladdning lyckades!</p>";
            /* Hoppa tillbaka till formuläret */
        } else {
            echo "<p>Något gick fel: $errors[$fileError]</p>";
        }
        
    } else {
        echo "<p>Icke tillåten filtyp!</p>";
    }
    /* Slut på bilduppladdning */
    /* Spara texten: beskrivning, pris och bildens nya namn */
    $handtag = fopen('beskrivnig.txt', 'a');
    fwrite($handtag, $beskrivning . "¤" . $pris . "¤" . $fileNewName . PHP_EOL);
    fclose($handtag);
    
}
?>
    <form action="#" method="POST" enctype="multipart/form-data">
    <label>Beskrivning</label><input type="text" name="beskrivning"><br>
    <label>Pris</label><input type="text" name="pris"><br>
    <label>Bild på vara</label><label class="valjFil" for="laddaUpp"><i class="fas fa-file-upload"></i> Välj bild</label><input id="laddaUpp" type="file" name="filen"><br>
    <button typr="submit" name="submit">Ladda upp vara</button>
    </form>
    </div>
</body>
</html>