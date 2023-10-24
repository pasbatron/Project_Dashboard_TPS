<?php require_once "connection.php" ?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/history_monitoring_hikitori.css">
    <link rel="icon" href="image/icon_pt_otics_1.png" type="image/icon type">
    <title>Monitoring Hikitori</title>
</head>
<body>
    <header>
        <nav>
            <h1>PT.Otics Indonesia <h3>Toyota Production System</h3></h1>
        </nav>
    </header>
    <br>
        <input type="text" placeholder="Search...">
    <br>
        <h2><u>History Monitoring Hikitori</u></h2>
    <br>
    <div class="table-monitoring">
        <table class="table_hikitori">
            <tr>
                <th>No</th>
                <th>Nama Hikitori</th>
                <th>Cycle Time</th>
                <th>Waktu Mulai</th>
                <th>Waktu Selesai</th>
                <th>Loading Time</th>
                <th>Status Hikitori</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
            <?php 
                $no = 1;
                $data = mysqli_query($connection, "SELECT * FROM table_monitoring_hikitori_transit ORDER BY id DESC");
                foreach($data as $list){
                    echo "
                        <tr>
                            <td>".$no."</td>
                            <td>".$list['name_hikitori']."</td>
                            <td>".$list['cycle_time']."</td>
                            <td>".$list['time_begin']."</td>
                            <td>".$list['time_finish']."</td>
                            <td>".$list['loading_time']."</td>
                            <td>".$list['status_hikitori']."</td>
                            <td>".$list['date']."</td>
                            <td>".$list['time']."</td>
                        </tr>
                    ";
                    $no++;
                }
            ?>
        </table>
    </div>
    
</body>
</html>