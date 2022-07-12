<?php 
    header('Content-Type: text/txt; charset=utf-8');
    // $conexion=mysqli_connect("localhost","lopeza","lOpeza6","lopeza_general") or
    $conexion=mysqli_connect("localhost","root","","comunidades_ajax") or
        die("Problemas con la conexión");

    $consulta=mysqli_query($conexion,"select id,nombre from comunidades_autonomas") or 
        die("Problemas en el select".mysqli_error($conexion));

    while ($reg=mysqli_fetch_assoc($consulta))//array sociativo
    {
        $vec[]=$reg;
    }

    $cad=json_encode($vec);//convierte el array vec en un json
    echo $cad;
?>