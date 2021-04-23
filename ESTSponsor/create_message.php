<?php
require 'config/config.php';
/*
    Request format : 
    { 
      timestamp,
      contenu,
      id_emeteur,
      id_recepteur
    } 
    Response format : 
    {
        error:'',
        data :{
            id_message,
            timestamp,
            contenu,
            id_emeteur,
            id_recepteur
          } 
        
    } 
*/
 
$obj = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO `message` (`timestamp`, `contenu`, `id_emeteur`, `id_recepteur`) VALUES (?,?,?,?) ";
$stmt = $conn->prepare($sql);
  
$stmt->bind_param(
  "ssdd",  
  $obj['timestamp'],
  $obj['contenu'],
  $obj['id_emeteur'],
  $obj['id_recepteur'] 
); 
 

if ($stmt->execute()) {

  $last_id = $conn->insert_id;

  $Sql_Query = "SELECT * FROM `message` WHERE `id_message` = $last_id";

  $result = $conn->query($Sql_Query);

  $res =  $result->fetch_assoc(); 

  $result = ["data" => $res];

  echo (json_encode($result));

} else {

  $error = 'Error saving message';

  $result = ['error' => $error];

  echo (json_encode($result));
}








$conn->close();
