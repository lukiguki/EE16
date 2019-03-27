<!DOCTYPE html>
<html lang="sv">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Väderdata</title>
<link rel="stylesheet" href="style.css">
</head>

<body>
<form method="post" action="#">
<input type="text" name="lat" id="lat">
<input type="text" name="lon" id="lon">
<button type="submit">Sök</button>
</form>
<?php
if(isset($_POST["lat"]) && isset($_POST["lon"])){
    $api = "5a04359da47042b7837f88a5c61908c9";
    $radius = 500;
    $max = 99;
    $lat = $_POST["lat"];
    $lon = $_POST["lon"];
    $url = "http://api.sl.se/api2/nearbystops.json?key=$api&originCoordLat=$lat&originCoordLong=$lon&maxresults=$max&radius=$radius";
    
    $json = file_get_contents($url);
    $jsonData = json_decode($json);
    $stopLocation = $jsonData->LocationList->StopLocation;
    foreach ($stopLocation as $stop) {
        $name = $stop->name;
        $latt = $stop->lat;
        $long = $stop->lon;
        echo "<p>Namn: $name Lat: $latt Lon: $long</p>";
    }
}
?>
</body>

</html>