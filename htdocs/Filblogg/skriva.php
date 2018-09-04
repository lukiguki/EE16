<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Min enkla blogg</title>
    <link rel="stylesheet" href="./css/flatly.epic.css">
</head>
<body>
    <h1>Skriv inlägg</h1>
    <nav>
    <ul>
    <li><a href="index.php">Hemsida</a></li>
    <li><a href="skriva.php">Skriv inlägg</a></li>
    <li><a href="lasa.php">Läs inlägg</a></li>
    </ul>
    </nav>
    <form action="spara.php" method="post">
    <label for="inlagg">Inlägg</label>
    <textarea name="inlagg" id="inlagg" cols="30" rows="10" class="form-control"></textarea>
    <button class="btn-primary">Spara inlägg</button>
    </form>
</body>
</html>