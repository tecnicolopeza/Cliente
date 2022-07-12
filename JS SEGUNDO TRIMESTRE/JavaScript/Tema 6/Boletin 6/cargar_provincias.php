<?php
sleep(2);
$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<provincias>\n";
// $conexion = mysqli_connect("localhost", "penajc", "pEnajc6", "penajc_general") or
$conexion = mysqli_connect("localhost", "root", "", "comunidades_ajax") or
    die("Problemas con la conexión");

$registros = mysqli_query($conexion, "select nombre,id from provincias where comunidad = '". $_REQUEST['cod'] ."'") or
    die("Problemas en el select" . mysqli_error($conexion));

while ($reg = mysqli_fetch_assoc($registros)) { //asociativo
    $xml .= "<provincia>\n";
    $xml .= "<id>".$reg["id"]."</id>\n";
    $xml .= "<nombre>".$reg["nombre"]."</nombre>\n";
    $xml .= "</provincia>\n";
}
$xml .= "</provincias>\n";
header('Content-Type: text/xml');
echo $xml;
