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

    $address = "  Craafords väg 12  ";
    $trimAdress = trim($address);
    echo ".$address.$trimAdress";

    $namn = "Lukas Kirby";
    $stortNamn = strtoupper($namn);
    echo "$namn $stortNamn";

    echo "<p> Längd = " . strlen($namn);

    $hello = "Hej På Dig";
    echo substr($hello, 0, 3);
    echo substr($hello, 4, 2);
    echo substr($hello, 8, 3);

    $epost = "h@gool.co";
    if (strstr($epost, "@")) {
        
    }


    
    ?>
</body>
</html>