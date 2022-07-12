<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","lopeza","lOpeza6","lopeza_general");
  return $con;
}
?>