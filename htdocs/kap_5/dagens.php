<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Datum på svenska</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
function datum() {
    
    
    /* Alla dagar i svenska */
    $dagar[1] = "Måndag";
    $dagar[2] = "Tisdag";
    $dagar[3] = "Onsdag";
    $dagar[4] = "Torsdag";
    $dagar[5] = "Fredag";
    $dagar[6] = "Lördag";
    $dagar[7] = "Söndag";
    
    $manad[1] = "Januari";
    $manad[2] = "Februari";
    $manad[3] = "Marsh";
    $manad[4] = "April";
    $manad[5] = "Maj";
    $manad[6] = "Juni";
    $manad[7] = "Juli";
    $manad[8] = "Augusti";
    $manad[9] = "September";
    $manad[10] = "Oktober";
    $manad[11] = "November";
    $manad[12] = "December";
    
    $manadNr = date("m");
    
    $dagen = date("N");
    $datum = date("d");
    $ar = date("Y");
    
    /* Skriv ut veckodag på svenska */
    
    return "$dagar[$dagen] $datum $manad[$manadNr] $ar ";
}

?>

</body>

</html>