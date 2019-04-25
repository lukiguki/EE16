<?php
 include 'dbh.php';
 include 'user.php';
 include 'viewuser.php';
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h1>hej</h1>
    <?php
    $users = new ViewUser();
    $users->showAllUsers();
    ?>
</body>
</html>