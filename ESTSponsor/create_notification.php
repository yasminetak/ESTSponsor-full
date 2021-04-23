<?php

require 'config/config.php';
/*
    Request format : 
    {   
      contenu,
      id_emeteur, 
      id_recepteur,
      type, 
      timestamp
    } 
    Response format : 
    {
        error:'',
        data :{
          id_notif,
          contenu,
          id_emeteur, 
          id_recepteur,
          type, 
          timestamp
        } 
    } 
*/
 
$obj = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO `notifications` ( `contenu`, `type`, `timestamp`, `id_emeteur`, `id_recepteur`) VALUES   (?,?,?,?,?) ";
$stmt = $conn->prepare($sql);

$stmt->bind_param(
  "sssdd",
  $obj['contenu'],
  $obj['type'],
  $obj['timestamp'],
  $obj['id_emeteur'],
  $obj['id_recepteur']
);


if ($stmt->execute()) {

  $last_id = $conn->insert_id;

  $Sql_Query = "SELECT * FROM `notifications` WHERE `id_notif` = $last_id";

  $result = $conn->query($Sql_Query);

  $res =  $result->fetch_assoc();

  $result = ["data" => $res];

  echo (json_encode($result));
} else {

  $error = 'Error saving notificaion';

  $result = ['error' => $error];

  echo (json_encode($result));
}








$conn->close();
