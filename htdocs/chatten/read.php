<?php
/* echo file_get_contents("chatt.txt"); */

$allaRader = file("chatt.txt");
$antalRader = count($allaRader);
$maxRader = 10;

if ($antalRader < $maxRader) {
    $maxRader = $antalRader;
}

for ($i=$antalRader - $maxRader; $i < $antalRader; $i++) { 
    echo $allaRader[$i];
}