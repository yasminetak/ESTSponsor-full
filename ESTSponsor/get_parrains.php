<?php
require 'config/config.php';
/*
    Request format : 
    {
        id
    } 
    Response format : 
    {
        error:'',
        data : [
          {
            id,
            name,
            email, 
            number,
            user,
            age,
            ville,
            filiere,
            relationship : {}
          } 
        ]
    } 
*/


$obj = json_decode(file_get_contents('php://input'), true);
$id = $obj['id'];

$sql = "SELECT utilisateur.*,(
       SELECT
           COUNT(*)
       FROM
           notifications
       WHERE
          notifications.id_emeteur= $id
       AND 
          notifications.id_recepteur=utilisateur.id
) as relations
FROM `utilisateur`
WHERE `user` ='parrain' ";

$resultQuery = $conn->query($sql);

$data = array();

while ($row  = $resultQuery->fetch_assoc()) {
  unset($row['password']);
  $data[] = $row;
}

$result = ["data" => $data];

echo (json_encode($result));


$conn->close();
