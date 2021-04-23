<?php

require '../config/config.php';
/*
  Request format : 
    {
      name,
      email,
      password,
      number,
      user,
      filiere
      ville,
      age
      
    } 
  Response format : 
    {
      error:'',
      data : {
        id,
         name,
      email,
      password,
      number,
      user,
      filiere
      ville,
      age
      } 
    } 
*/
// Getting the received JSON into $Received_JSON variable.
$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

// Populate User email from JSON $obj array and store into $user_email variable.
$email = $obj['email'];

//Checking User entered Email is already exist or not in MySQL database using SQL query.
$CheckSQL = "SELECT * FROM utilisateur WHERE email='$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($conn, $CheckSQL));

if (isset($check)) {

  $msg = 'Email Already Exist, Please Try Again With Different Email.';

  $result = ['error' => $msg];

  echo (json_encode($result));
} else {

  // Creating SQL query and insert the record into MySQL database table if email dose not exist in database.

  // insert data 
  $Sql_Query = "INSERT INTO `utilisateur` (`name`, `email`, `password`, `number`, `user`, `filiere`, `ville`, `age`) VALUES (?,?,?,?,?,?,?,?)";

  $stmt = $conn->prepare($Sql_Query);
  $stmt->bind_param(
    "ssssssss",
    $obj['name'],
    $obj['email'],
    $obj['password'],
    $obj['number'],
    $obj['user'],
    $obj['filiere'],
    $obj['ville'],
    $obj['age']
  );
  //fetch and return result 
  if ($stmt->execute()) {

    $last_id = $conn->insert_id;

    $Sql_Query = "SELECT * FROM `utilisateur` WHERE `id` = $last_id";

    $result = $conn->query($Sql_Query);

    $res =  $result->fetch_assoc();

    unset($res['password']);

    $result = ["data" => $res];

    echo (json_encode($result));
  } else {

    $error = 'Try Again';

    $result = ['error' => $error];

    echo (json_encode($result));
  }
}
mysqli_close($conn);
