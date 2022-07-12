<?php

sleep(2); //para la peticion dos segundos

// $conexion = mysqli_connect("localhost", "lopeza", "lOpeza6", "lopeza_general") or
$conexion = mysqli_connect("localhost", "root", "", "prueba_comunidades") or
    die("Problemas con la conexión");

$consulta = mysqli_query($conexion, "select id,nombre from provincias where comunidad = '".$_REQUEST['cod']."'") or
    die("Problemas en el select" . mysqli_error($conexion));

    $xml = "<?xml version=\"1.0\"?> \n <provincias>\n";

while ($reg = mysqli_fetch_assoc($consulta)) //array sociativo
{
    $xml .= "<provincia>\n";//cogemos el nombre del array asociativo el .= añade a la variable xml sin cambiar lo anterior.
    $xml .= "<id>".$reg["id"]."</id>\n";
    $xml .= "<nombre>".$reg["nombre"]."</nombre>\n";
    $xml .= "</provincia>\n";
}

    $xml .= "</provincias>";

    header('Content-Type: text/xml');
    echo $xml;
?>
