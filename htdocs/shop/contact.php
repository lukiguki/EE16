<?php
session_start();
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>
<body>
    <ul>
        <li><a href="session.php">Home</a></li>
        <li><a href="contact.php">Contact</a></li>
    </ul>
    <?php
    $_SESSION['username'] = "LukiGuki";
    echo $_SESSION['username'];
    ?>
</body>
</html>