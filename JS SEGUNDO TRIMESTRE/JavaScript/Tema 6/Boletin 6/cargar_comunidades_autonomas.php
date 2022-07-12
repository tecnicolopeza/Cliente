<?php
header('Content-Type: text/txt; charset=utf-8');
// $conexion = mysqli_connect("localhost", "penajc", "pEnajc6", "penajc_general") or
$conexion = mysqli_connect("localhost", "root", "", "comunidades_ajax") or
    die("Problemas con la conexión");

$registros = mysqli_query($conexion, "select id,nombre from comunidades_autonomas") or
    die("Problemas en el select" . mysqli_error($conexion));

while ($reg = mysqli_fetch_assoc($registros)) { //asociativo
    // while ($reg = mysqli_fetch_array($registros)) { //asocioativo y numerico
    $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;
