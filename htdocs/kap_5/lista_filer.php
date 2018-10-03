<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lista alla filer i en katalog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
/* Ange sökväg till katalogen */
$sokvag = './Bilder';

/* Skanna katalogen */
$filer = scandir($sokvag);


/* Skriv ut alla filer som hittades */
foreach ($filer as $fil) {
    if($fil != "." && $fil != ".."){
        echo "<div class=\"ros\">
        \n<img class=\"ram hoger\" src=\"./Bilder/$fil\" alt=\"Flikros (Rosa obtusifolia)\">
        \n<p class=\"textHoger\"><strong>Hallo</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero tempore quasi modi optio, delectus voluptatum est veritatis quidem perspiciatis suscipit molestiae aliquid nesciunt hic reprehenderit animi nostrum vitae exercitationem.</p>
        \n<hr>
    \n</div>";
    }
}
?>
    
</body>
</html>