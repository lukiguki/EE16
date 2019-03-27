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
    $stops = [];
    foreach ($stopLocation as $stop) {
        $name = $stop->name;
        $latt = $stop->lat;
        $long = $stop->lon;
        $stops[] = [urlencode($name), $latt, $long];
    }
    echo json_encode($stops);
} else {
    echo "Det funkar inte";
}
?>