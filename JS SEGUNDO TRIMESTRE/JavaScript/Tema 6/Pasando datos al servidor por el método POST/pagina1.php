<?php
header('Content-Type: text/html; charset=ISO-8859-1');
$ar = fopen("comentarios.txt", "a") or
    die("No se pudo abrir el archivo");
fputs($ar, "Nombre:" . $_POST['nombre'] . "\n");
fputs($ar, "Comentarios:" . $_POST['comentarios'] . "\n\n");
fclose($ar);
