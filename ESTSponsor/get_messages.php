<?php
require 'config/config.php';
/*
    Request format : 
    {  
      id_emeteur,
      id_recepteur
    } 
    Response format : 
    { 
        data :[ 

              {
                id_message,
                timestamp,
                contenu,
                id_emeteur  : request.id_emeteur ,
                id_recepteur: request.id_resepteur
              } , 
              {
                id_message,
                timestamp,
                contenu,
                id_emeteur  : request.id_emeteur ,
                id_recepteur: request.id_resepteur
           } 
         ]
    } 
*/

$obj = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT * FROM `message` WHERE  `id_emeteur` =? AND `id_recepteur`=? ";
$stmt = $conn->prepare($sql);

$stmt->bind_param(
  "ii",
  $obj['id_emeteur'],
  $obj['id_recepteur']
);


$stmt->execute();
$resultQuery  = $stmt->get_result();

$data = array();

while ($row  = $resultQuery->fetch_assoc()) {
  $data[] = $row;
}

$result = ["data" => $data];

echo (json_encode($result));


$conn->close();
