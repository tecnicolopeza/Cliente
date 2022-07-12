<?php
header('Content-Type: text/txt; charset=utf-8');
$conexion = mysqli_connect("localhost", "root", "", "tienda") or
    die("Problemas con la conexión");

$registros = mysqli_query($conexion, "select codigo,descripcion,precioCompra,precioVenta from productos") or
    die("Problemas en el select" . mysqli_error($conexion));

while ($reg = mysqli_fetch_array($registros)) {
    $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;
