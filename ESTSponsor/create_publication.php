<?php
require 'config/config.php';
/*
    Request format : 
    { 
      `titre`, 
      `description`, 
      `timestamp`, 
      `id_document`,
      `id_utilisateur`
    } 
    Response format : 
    {
        error:'',
        data :{
          `id_publication`, 
          `titre`, 
          `description`, 
          `timestamp`, 
          `document` : {
            id_document
            titre_document,
            chemin_document, 
          },
          `user` :   {
            id,
            name,
            email,
            password,
            number,
            user,
            age,
            ville,
            filiere
         } 

       } 
        
    } 
*/

$obj = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO `publications` ( `titre`, `description`, `timestamp`, `id_document`, `id_utilisateur`)  VALUES (?,?,?,?,?) ";
$stmt = $conn->prepare($sql);

$stmt->bind_param(
  "sssdd",
  $obj['titre'],
  $obj['description'],
  $obj['timestamp'],
  $obj['id_document'],
  $obj['id_utilisateur']
);


if ($stmt->execute()) {

  $last_id = $conn->insert_id;

  $Sql_Query = "SELECT * FROM `publications` WHERE `id_publication` = $last_id";

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
