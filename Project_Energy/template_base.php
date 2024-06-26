<?php include 'getConnect.php'; ?>
       


<?php

function header_table(){
    echo "<table>";
    echo "<tr>";
    echo "<th rowspan='3'>Tanggal</th>";
    echo "<th rowspan='3'>Nama Panel</th>";
    echo "<th colspan='4' class='shift-header'>Shift-1</th>";
    echo "<th colspan='4' class='shift-header'>Shift-2</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th colspan='2' class='shift-subheader'>07:00 sd 19:49</th>";
    echo "<th colspan='2' class='shift-subheader'>19:50 sd 06:59</th>";
    echo "<th colspan='2' class='shift-subheader'>07:00 sd 19:49</th>";
    echo "<th colspan='2' class='shift-subheader'>19:50 sd 06:59</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "</tr>";
}

?>
