<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"INSERT INTO usuarios(nombre, postal, mensaje, mail) values ('$params->nombre',$params->postal,$params->mensaje,$params->mail)");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>