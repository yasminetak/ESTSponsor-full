<?php
require 'config/config.php';
/*
    Request format : 
    { 
      titre_document,
      chemin_document, 
    } 
    Response format : 
    {
        error:'',
        data :{
          id_document
          titre_document,
          chemin_document, 
        } 
        
    } 
*/
 
$obj = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO `document` ( `titre_document`, `chemin_document`) VALUES (?,?) ";
$stmt = $conn->prepare($sql);
  
$stmt->bind_param(
  "ss",  
  $obj['titre_document'],
  $obj['chemin_document']
); 
 

if ($stmt->execute()) {

  $last_id = $conn->insert_id;

  $Sql_Query = "SELECT * FROM `document` WHERE `id_document` = $last_id";

  $result = $conn->query($Sql_Query);

  $res =  $result->fetch_assoc(); 

  $result = ["data" => $res];

  echo (json_encode($result));

} else {

  $error = 'Error saving document';

  $result = ['error' => $error];

  echo (json_encode($result));
}








$conn->close();
