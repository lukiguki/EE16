<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Väderdata</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
    $api = "22ee1d58f7adae08ee71fa7c0bd24481";
    $json = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=$api&units=metric");
    print_r($json);

    /* avkoda */
    $jsonData = json_decode($json);
    /* plocka ut kordinaterna */
    $coord = $jsonData->coord;
    $main = $jsonData->main;
    $weather = $jsonData->weather;
    $temp = $main->temp;
    $lat = $coord->lat;
    $lon = $coord->lon;
    $icon = $weather[0]->icon . ".png";

    echo "<p>Tokyo ligger på lattitud: $lat och långitud: $lon och $temp grader";
    echo "<img src=\"https://api.openweathermap.org/img/w/$icon\" alt=\"Yeye\""

    ?>
</body>

</html>