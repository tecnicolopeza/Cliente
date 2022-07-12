<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_REQUEST['nombre'])){
            $nombre = $_REQUEST['nombre']; 
            $sexo = $_REQUEST['sexo']; 
            $altura = $_REQUEST['altura']; 
            $fechaNac = $_REQUEST['fechaNac']; 
            $semana = $_REQUEST['semanaPreferente']; 
            $fumador = $_REQUEST['fumador']; 
            $cigarrillos = $_REQUEST['numeroCigarrillos']; 
            $observaciones = $_REQUEST['observaciones'];
            

            echo "Nombre: ".$nombre;
            echo "Sexo: ".$sexo;
            echo "Altura: ".$altura." cm";
            echo "Nombre: ".$fechaNac;
            if ($fumador) {
                echo "Sí";
                echo "Cigarrillos: ".$cigarrillos;
            }else{
                echo "No";
            }
            if ($observaciones!=null) {
                echo "Observaciones: ".$observaciones;
            }
        }
    ?>
</body>
</html>