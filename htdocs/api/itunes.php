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
<input type="text" name="namn" id="namn">
<button type="submit">Sök</button>
</form>
<?php
if(isset($_POST["namn"])){
    $namn = $_POST["namn"];
    $sok = str_replace(" ", "+", "$namn");
    
    $json = file_get_contents("https://itunes.apple.com/search?term=$sok&limit=10");
    $jsonData = json_decode($json);
    $resultCount = $jsonData->resultCount;
    for ($i=0; $i < $resultCount; $i++) { 
        $results = $jsonData->results;
        $result = $results[$i]->trackName;
        echo "<p>$result</p>";
    }
}
?>
</body>

</html>