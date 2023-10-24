<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tps";

    $connection = mysqli_connect($servername, $username, $password, $database);

    if(mysqli_connect_errno()){
        echo "Gagal Terkoneksi !! : ".mysqli_connect_error();
    }
?>