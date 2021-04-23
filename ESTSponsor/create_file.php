<?php
require 'config/config.php';
/*
    Request format : 
        file named : doc 
        type : multipart/form-data --> 
    Response format  (example) : 
    
        {
            status: "success",
            error: false,
            message: "File uploaded successfully",
            url: "http://localhost/ESTSponsor/user_docs/356400-avatar1.jpg"
        }
 
      
*/ 

$response = array();
$upload_dir = 'user_docs/';
$server_url = 'http://localhost/ESTSponsor/';


if ($_FILES['doc']) {
    $avatar_name = $_FILES["doc"]["name"];
    $avatar_tmp_name = $_FILES["doc"]["tmp_name"];
    $error = $_FILES["doc"]["error"];

    if ($error > 0) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    } else {
        $random_name = rand(1000, 1000000) . "-" . $avatar_name;
        // uploads/1548_foto2020.png
        $upload_name = $upload_dir . strtolower($random_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);

        if (move_uploaded_file($avatar_tmp_name, $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url . $upload_name
            );
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
