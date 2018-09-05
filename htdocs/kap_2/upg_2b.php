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
       $namn = $_POST["namn"];
       $email = $_POST["email"];

       echo "Hej $namn vi kommer skicka ett mejl till denna email $email för att du ska kunne bekräfta";
    ?>
</body>
</html>