<?php
require 'cross.php';
//Definir Mon host ici.
$HostName = "localhost";

//Definir Ma Base de donnée ici.
$DatabaseName = "parrains";

//Definir le username de ma Base de donnée ici
$HostUser = "root";

//Definir le mot de passe de ma base de donnée ici.
$HostPass = "";

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
