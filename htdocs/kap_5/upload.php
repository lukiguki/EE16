<?php
/* Kolla att man har klickat på knappen submit */
if (isset($_POST['submit'])){
    $file = $_FILES['file'];
    print_r($file);
    /* Plocka ut filnamn */
    $fileName = $file['name'];
    /* echo "<p>Filens namn är $fileName</p>"; */
    /* Plocka ut filtype */
    $fileType = $file['type'];
    /* echo "<p>Filens namn är $fileType</p>"; */
    /* Plocka ut filtemp */
    $fileTempName = $file['tmp_name'];
/*     echo "<p>Filens temporära namn är $fileTempName</p>";
 */    /* Plocka ut fil storleken */
    $fileSize = $file['size'];
/*     echo "<p>Filens storlek i bytes är $fileSize</p>";
 */    /* Plocka ut fil error */
    $fileError = $file['error'];
/*     echo "<p>Filens error är $fileError</p>";
 */    
    /* plocka ut filändelse */
    $fileExt = explode('image/', $fileType);
    /* print_r($fileExt);
    echo "<p>filens filändelse är $fileExt[1] </p>"; */
    
    $allowedType = ['jpeg', 'png', 'gif', 'pdf'];
    
    /* är filen tillåten att ladda upp */
    if (in_array($fileExt[1], $allowedType)) {
        echo "<p>Nämen se på fan den är tillåten.</p>";
        /* fileerror */
        if ($fileError == 0) {
            /* skapa nytt unikt filnamn för att inte skriva över gamla filnamn */
            $fileNewName = uniqid('', true).".".$fileExt;

            /* Den nya filvägen */
            $fileDestination = ".bilder/$fileNewName";


            /* flytta */
            move_uploaded_file($fileTempName, $fileDestination);
            echo "<p>Uppladdningen lyckades</p>";

            header("Location:filuppladdning.php?uploadsuccess");
        }else {
            echo "<p> there was an error in uploading your file! </p>";
        }
    }else {
        echo "<p>Icke tillåten filtyp</p>";
    }
    
    
    
}
?>