<?php 

include 'getConnect.php'; 
include 'getRecap.php';

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/icon_pt_otics_1.png" type="image/x-icon">
    <link rel="stylesheet" href="src/style.css">
    <title>Monitoring Energy</title>
</head>

<body>

    <nav class="navbar">
        <div class="container-navbar">
            <div class="logo"><a href="main.php">PT.Otics Indonesia Monitoring Energy</a></div>
            <ul class="nav-links">
                <li><a href="#">=</a></li>
            </ul>
        </div>
    </nav>
    <br><hr>
    <h2>Realtime Monitoring Energy</h2>
    
    <div class="layout-main-1">
        <div class="item-1">
            <table>
                <tr>
                    <th>Name Panel</th> 
                    <th>Nama Power Meter</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                <?php
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<tr>
                                    <td rowspan='3'>DISTRIBUTION PANEL ALL OTICS</td>
                                    <td>{$row['name_power_meter']}</td>
                                    <td>{$row['data_date']}</td>
                                    <td>{$row['data_time']}</td>
                                </tr>";
                            $data_kwh_meter_a = (int)$row['data_kwh_meter'];
                        }
                    } 

                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' and data_time <= '07:10:00' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $data_kwh_meter_b = (int)$row['data_kwh_meter'];
                        }
                    } 
                    // -----------------------------------------------------
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                                $data_kwh_meter_c = (int)$row['data_kwh_meter'];
                        }
                    } 
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' and data_time < '19:50:00' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $data_kwh_meter_d = (int)$row['data_kwh_meter'];
                        }
                    } 

                    $total_pm200_shift_satu = $data_kwh_meter_a - $data_kwh_meter_b;
                    $total_pm200_shift_dua = $data_kwh_meter_c - $data_kwh_meter_d;

                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<tr>
                                    <td>{$row['name_power_meter']}</td>
                                    <td>{$row['data_date']}</td>
                                    <td>{$row['data_time']}</td>
                                </tr>";
                                $data_kwh_meter_e = (int)$row['data_kwh_meter'];
                        }
                    } 

                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' and data_time < '07:10:00' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $data_kwh_meter_f = (int)$row['data_kwh_meter'];
                        }
                    } 
                    // -----------------------------------------------------
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                                $data_kwh_meter_g = (int)$row['data_kwh_meter'];
                        }
                    } 
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' and data_time < '19:50:00' ORDER BY id DESC LIMIT 1";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $data_kwh_meter_h = (int)$row['data_kwh_meter'];
                        }
                    }
                    
                    else {
                        echo "<tr><td colspan='4'>No data available</td></tr>";
                    }
                    $total_pm220_shift_satu = $data_kwh_meter_e - $data_kwh_meter_f;
                    $total_pm220_shift_dua = $data_kwh_meter_g - $data_kwh_meter_h;
                ?>
            </table>
        </div>


        <div class="item-1">
            <div class="kwh-meter">
                <div class="kwh-heading">
                    <p>Shift 1 PM_200</p>
                </div>
                <div class="kwh-data-2">
                    <p id="current-reading">Total kWh</p>
                    <p id="current-reading-data"><?php echo "{$total_pm200_shift_satu}"; ?></p>
                </div>
            </div>
        </div>

        <div class="item-2">
            <div class="kwh-meter">
                <div class="kwh-heading">
                    <p>Shift 2 PM_200</p>
                </div>
                <div class="kwh-data-1">
                    <p id="current-reading">Total kWh</p>
                    <p id="current-reading-data"><?php echo "{$total_pm200_shift_dua}"; ?></p>
                </div>
            </div>
        </div>

        <div class="item-3">
            <div class="kwh-meter">
                <div class="kwh-heading">
                    <p>Shift 1 PM_220</p>
                </div>
                <div class="kwh-data-1">
                    <p id="current-reading">Total kWh</p>
                    <p id="current-reading-data"><?php echo "{$total_pm220_shift_satu}"; ?></p>
                </div>
            </div>
        </div>

        <div class="item-4">
            <div class="kwh-meter">
                <div class="kwh-heading">
                    <p>Shift 2 PM_220</p>
                </div>
                <div class="kwh-data-1">
                    <p id="current-reading">Total kWh</p>
                    <p id="current-reading-data"><?php echo "{$total_pm220_shift_dua}"; ?></p>
                </div>
            </div>
        </div>
    </div>
    <!-- section report -->
    <br><hr>
    <h2>History Consumption Energy</h2>
    <br><hr>
    <div class="layout-main-2">
        <?php header_table(); ?>
        <?php  
            // DPCHAB

 
            
            
    // ---------------------------------------------------------------------------------


        
            echo "<tr>";
            echo "<td>$dataDPCHABPM200AreaBDate</td>";
            echo "<td>DP CAMP HOUSING A&B</td>";
            echo "<td>$kwhtotalDPCHABPM200shift1</td>";
            echo "<td>$kwhtotalDPCHABPM220shift1</td>";
            echo "<td>$kwhtotalDPCHABPM200shift2</td>";
            echo "<td>$kwhtotalDPCHABPM220shift2</td>";
            echo "</tr>";


            echo "<tr>";
            echo "<td>$dataDPCHABPM200AreaBDate</td>";
            echo "<td>DP CAMP HOUSING C&D</td>";
            echo "<td>$kwhtotalDPCHCDPM200shift1</td>";
            echo "<td>$kwhtotalDPCHCDPM220shift1</td>";
            echo "<td>$kwhtotalDPCHCDPM200shift2</td>";
            echo "<td>$kwhtotalDPCHCDPM220shift2</td>";
            echo "</tr>";
        ?>
        <?php echo "</table>"; ?>
    
    </div>
    <!-- <br><br><br><br> -->
    <h4>DP = DISTRIBUTION PANEL</h4>












    <script src="src/script.js"></script>
</body>
</html>
