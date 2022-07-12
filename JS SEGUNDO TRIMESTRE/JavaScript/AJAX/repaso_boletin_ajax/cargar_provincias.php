<?php 
header('Content-Type: text/xml');

$conexion = mysqli_connect("localhost", "root", "", "comunidades_ajax") or
    die("Problemas con la conexión");
$registros = mysqli_query($conexion, "select id, nombre, comunidad from provincias where comunidad = '".$_REQUEST['cod']."'") or
die("Problemas en el select" . mysqli_error($conexion));
$xml = "<?xml version=\"1.0\"?>\n";
$xml .= "<provincias>\n";
while ($reg = mysqli_fetch_assoc($registros)) {
    $xml .= "<provincia>\n";
    $xml .= "<id>$reg[id]</id>\n";
    $xml .= "<nombre>$reg[nombre]</nombre>\n";
    $xml .= "</provincia>\n";
}
$xml .= "</provincias>\n";

echo $xml;
?>

