<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Min enkla blogg</title>
    <link rel="stylesheet" href="./css/flatly.epic.css">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
<div class="kontainer">
<header>
<?php include "header.inc" ?>
<main>
<form action="spara.php" method="post">
    <label for="inlagg">Inlägg</label>
    <textarea name="inlagg" id="inlagg" cols="30" rows="10" class="form-control"></textarea>
    <button class="btn-primary">Spara inlägg</button>
    </form>
</main>
<footer>
Lukas Kirby 2018
</footer>
</div>



</body>
</html>