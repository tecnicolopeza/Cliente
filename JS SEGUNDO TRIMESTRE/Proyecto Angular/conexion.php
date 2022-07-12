<?php
function retornarConexion() {
    $con=mysqli_connect("localhost","root","","proyectoangular");
    return $con;
}
?>