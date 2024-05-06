<?php
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $database = "database_tps";

    $connection = mysqli_connect($servername, $username, $password, $database);

    if(mysqli_connect_errno()){
        echo "Gagal Terkoneksi !! : ".mysqli_connect_error();
    }
?>