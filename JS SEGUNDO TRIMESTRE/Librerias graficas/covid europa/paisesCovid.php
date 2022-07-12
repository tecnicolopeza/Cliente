<?php 
header('Content-Type: text/txt; charset=utf-8');
$conexion = mysqli_connect("localhost", "lopeza", "lOpeza6", "lopeza_general") or
    die("Problemas de conexion con la BD");

$registros = mysqli_query($conexion, "select * from paises") or 
    die("Problemas en el select".mysqli_error($conexion));

while ($reg=mysqli_fetch_assoc($registros))//array sociativo
{
    $array[]=$reg;
}

$cadena=json_encode($array);//convierte el array vec en un json
echo $cadena;

?>