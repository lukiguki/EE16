<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Texteditor</title>
    <link rel="stylesheet" href="texteditor.css">
</head>

<body>
    <div class="content">
        <?php if(isset($_POST['paragraph'])) {
    /* Skaffa information */
    $paragraph=filter_input(INPUT_POST, 'paragraph', FILTER_SANITIZE_STRING);
    /* variablar ifall nödvändigt */
    $handtag=fopen('text.txt', 'w') or die('<p>Kunde inte hitta filen</p>');
    fwrite($handtag, $paragraph . PHP_EOL);
    fclose($handtag);
    $allPar=file("text.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    echo "<script defer src=\"modal.js\"></script>";
    
    foreach ($allPar as $par) {
        echo "<div class=\"newPost\"><p>$par</p></div>";
    }
}

?>
        <form action="#" method="post"><label for="paragraph"></label><textarea name="paragraph" id="paragraph" cols="30"
                rows="10"><?php $allPar=file("text.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

foreach ($allPar as $par) {
    echo "$par";
}

?></textarea><button type="submit" name="submit">Spara</button></form>
        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
    </div>

</body>

</html>