<?php/* 
*
 */
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Filuppladdning</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
if (isset($_GET['uploadsuccess'])) {
    echo "<script>alert('Uppladdning lyckades!');</script>";
}
?>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button typr="submit" name="submit">UPLOAD</button>
    </form>
</body>
</html>