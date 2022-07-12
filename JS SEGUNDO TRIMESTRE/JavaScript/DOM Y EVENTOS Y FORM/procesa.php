<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Datos paciente</h1>
    <?php

        if(isset($_REQUEST['nombre'])){
            $nombre = $_REQUEST['nombre']; 
            $sexo = $_REQUEST['sexo']; 
            $altura = $_REQUEST['altura']; 
            $fechaNac = $_REQUEST['fechaNac']; 
            // $fechaNac = date('d-m-Y', strtotime($_REQUEST['fechaNac'])); //otra forma de darle el formato
            $semana = $_REQUEST['semanaPreferente']; 
            $observaciones = $_REQUEST['observaciones'];

            $fechaNac = date('d-m-Y'); //cambiar fecha orden

            echo "Nombre: ".$nombre."<br>";
            echo "Sexo: ".$sexo."<br>";
            echo "Altura: ".$altura." cm"."<br>";
            echo "Fecha nacimiento: ".$fechaNac."<br>";
            if (isset($_REQUEST['fumador'])) {
                $fumador = $_REQUEST['fumador'];
                $cigarrillos = $_REQUEST['numeroCigarrillos']; 
                if ($fumador) {
                    echo "Fumador: Sí"."<br>";
                    echo "Cigarrillos: ".$cigarrillos."<br>";
                }else{
                    echo "Fumador: No"."<br>";
                }
            }
            
            if ($observaciones!=null) {
                echo "Observaciones: ".$observaciones."<br>";
            }
        }
    ?>
</body>
</html>