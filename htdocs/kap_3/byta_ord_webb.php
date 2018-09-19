<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hitta ord på en webbsida</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="byta_ord_webb_b.php" method="post">
        <label for="ruta">Url: </label>
        <input type="text" name="url"><br>
        <label for="ordet">Ordet:</label>
        <input type="text" name="ordet"><br>
        <label for="nordet">Nya ordet::</label>
        <input type="text" name="nordet"><br>
        <button>Byt Ord</button>
    </form>
</body>

</html>