<?php
$datei = 'reg.txt';

$handle = fopen($datei, 'a');
if (flock($handle, LOCK_EX)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pw = $_POST['pw'];

    $daten = "Name: $name, E-Mail: $email, pw: $pw\n";

    fwrite($handle, $daten);

    flock($handle, LOCK_UN);
    fclose($handle);
}
?>
