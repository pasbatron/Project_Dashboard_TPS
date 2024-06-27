<?php include 'getConnect.php'; ?>
<?php include 'getTemplateBase.php'; ?>
<?php include 'getRecap.php'; ?>

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
                                    <td>{$row['date']}</td>
                                    <td>{$row['time']}</td>
                                </tr>";
                            $data_kwh_meter_a = (int)$row['data_kwh_meter'];
                        }
                    } 

                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' and time <= '07:10:00' ORDER BY id DESC LIMIT 1";
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
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 200V' and time < '19:50:00' ORDER BY id DESC LIMIT 1";
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
                                    <td>{$row['date']}</td>
                                    <td>{$row['time']}</td>
                                </tr>";
                                $data_kwh_meter_e = (int)$row['data_kwh_meter'];
                        }
                    } 

                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' and time < '07:10:00' ORDER BY id DESC LIMIT 1";
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
                    $sql = "SELECT * FROM table_all_energy WHERE name_power_meter = 'POWER METER 220V' and time < '19:50:00' ORDER BY id DESC LIMIT 1";
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
            $dataGetDataDPCHABPM200Shift1Awal = getDataDPCHABPM200Shift1Awal();
            $dataGetDataDPCHABPM200DateShift1Awal = getDataDPCHABPM200DateShift1Awal();
            $dataGetDataDPCHABPM200timeShift1Awal = getDataDPCHABPM200TimeShift1Awal();
            $dataGetDataDPCHABPM220Shift1Awal = getDataDPCHABPM220Shift1Awal();
            $dataGetDataDPCHABPM220DateShift1Awal = getDataDPCHABPM220DateShift1Awal();
            $dataGetDataDPCHABPM220timeShift1Awal = getDataDPCHABPM220TimeShift1Awal();
            $dataGetDataDPCHCDPM200Shift1Awal = getDataDPCHCDPM200Shift1Awal();
            $dataGetDataDPCHCDPM200DateShift1Awal = getDataDPCHCDPM200DateShift1Awal();
            $dataGetDataDPCHCDPM200timeShift1Awal = getDataDPCHCDPM200TimeShift1Awal();
            $dataGetDataDPCHCDPM220Shift1Awal = getDataDPCHCDPM220Shift1Awal();
            $dataGetDataDPCHCDPM220DateShift1Awal = getDataDPCHCDPM220DateShift1Awal();
            $dataGetDataDPCHCDPM220timeShift1Awal = getDataDPCHCDPM220TimeShift1Awal();


            $dataGetDataDPCHABPM200Shift1Akhir = getDataDPCHABPM200Shift1Akhir();
            $dataGetDataDPCHABPM200DateShift1Akhir = getDataDPCHABPM200DateShift1Akhir();
            $dataGetDataDPCHABPM200timeShift1Akhir = getDataDPCHABPM200TimeShift1Akhir();
            $dataGetDataDPCHABPM220Shift1Akhir = getDataDPCHABPM220Shift1Akhir();
            $dataGetDataDPCHABPM220DateShift1Akhir = getDataDPCHABPM220DateShift1Akhir();
            $dataGetDataDPCHABPM220timeShift1Akhir = getDataDPCHABPM220TimeShift1Akhir();
            $dataGetDataDPCHCDPM200Shift1Akhir = getDataDPCHCDPM200Shift1Akhir();
            $dataGetDataDPCHCDPM200DateShift1Akhir = getDataDPCHCDPM200DateShift1Akhir();
            $dataGetDataDPCHCDPM200timeShift1Akhir = getDataDPCHCDPM200TimeShift1Akhir();
            $dataGetDataDPCHCDPM220Shift1Akhir = getDataDPCHCDPM220Shift1Akhir();
            $dataGetDataDPCHCDPM220DateShift1Akhir = getDataDPCHCDPM220DateShift1Akhir();
            $dataGetDataDPCHCDPM220timeShift1Akhir = getDataDPCHCDPM220TimeShift1Akhir();  
            
            
    // ---------------------------------------------------------------------------------

            // $dateObject = date_create($dataGetDataDPCHABPM200DateShift1Awal);
            // $formattedDate = date_format($dateObject, 'Y-m-d');
            // $formattedDateYesterdar = date('Y-m-d', strtotime('-1 day'));
            // $dateString = $dataGetDataDPCHABPM200DateShift1Awal;
            // $parsedData = explode("-", $dateString);



            // $parsedYear = $parsedData[0];
            // $parsedMonth = $parsedData[1];
            // $parsedDay = $parsedData[2];


            // echo $formattedDateYesterdar;
            // echo $formattedDate;



            echo "<tr>";
            echo "<td> $dataGetDataDPCHABPM200DateShift1Awal </td>";
            echo "<td> $dataGetDataDPCHABPM200timeShift1Awal </td>";
            echo "<td>DP CAMP HOUSING A&B</td>";
            echo "<td>$dataGetDataDPCHABPM200Shift1Awal</td>";


            echo "<td>Generated Data 2</td>";
            echo "<td>Generated Data 3</td>";
            echo "<td>Generated Data 4</td>";
            echo "</td>";


            echo "<tr>";
            echo "<td> $dataGetDataDPCHABPM220DateShift1Awal </td>";
            echo "<td> $dataGetDataDPCHABPM220timeShift1Awal </td>";
            echo "<td>DP CAMP HOUSING C&D</td>";
            echo "<td>$dataGetDataDPCHABPM220Shift1Awal</td>";


            echo "<td>Generated Data 2</td>";
            echo "<td>Generated Data 3</td>";
            echo "<td>Generated Data 4</td>";
            echo "</tr>";
        ?>
        <?php echo "</table>"; ?>
    
    </div>
    <!-- <br><br><br><br> -->
    <h4>DP = DISTRIBUTION PANEL</h4>


    <script src="src/script.js"></script>

    
</body>
</html>
