<?php
require 'config/config.php';
/*
    Request format : 
    {  
    } 
    Response format : 
    {
        error:'',
        data :[
          {
          `id_publication`, 
          `titre`, 
          `description`, 
          `timestamp`, 
          `document` : {
            id_document
            titre_document,
            chemin_document, 
          },
          `utilisateur` :   {
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
        ]  // sorted by last inserted 
    } 
*/


$Sql_Query = "SELECT * FROM `publicite` ORDER BY id_publicite DESC ";

$resultQuery = $conn->query($Sql_Query);

$data = array();
 
while ($row  = $resultQuery->fetch_assoc()) {
  // add user and document data



  $docId = $row['id_document'];


  $sqlDoc = "SELECT * FROM `document` WHERE `id_document`=$docId";

  $resDoc = $conn->query($sqlDoc);

  $row['document'] = $resDoc->fetch_assoc();


  $userID = $row['id_utilisateur'];


  $sqlUser = "SELECT * FROM `utilisateur` WHERE `id`=$userID";

  $resUser = $conn->query($sqlUser);

  $row['utilisateur'] = $resUser->fetch_assoc();




  //secured part 

  $data[] = $row;
}

$result = ["data" => $data];

echo (json_encode($result));

 

$conn->close();
