<?php
require '../config/config.php';
/*
    Request format : 
    {
        email,
        password
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
        age,
        ville,
        filiere
        } 
    } 
*/

$json = file_get_contents('php://input');

$obj = json_decode($json, true);

// Populate User email from JSON $obj array and store into $email and password.

$email = $obj['email'];
$password = $obj['password'];

$Sql_Query = "SELECT * FROM `utilisateur` WHERE `email`='$email' AND `password`= '$password' ";

$result = $conn->query($Sql_Query);


if ($result->num_rows > 0) {

    $res =  $result->fetch_assoc();

    unset($res['password']);

    $result = ["data" => $res];

    echo (json_encode($result));
} else {

    // If the record inserted successfully then show the message.
    $error = 'Invalid credentials';

    $result = ['error' => $error];

    echo (json_encode($result));
}

mysqli_close($conn);
