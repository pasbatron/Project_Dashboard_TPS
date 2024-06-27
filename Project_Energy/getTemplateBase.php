
<?php
function header_table(){
    echo "<table>";
    echo "<tr>";
    echo "<th rowspan='3'>Date</th>";
    echo "<th rowspan='3'>Time</th>";
    echo "<th rowspan='3'>Nama Panel</th>";
    echo "<th colspan='2' class='shift-header'>Shift-1</th>";
    echo "<th colspan='2' class='shift-header'>Shift-2</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th colspan='2' class='shift-subheader'>07:00 sd 19:49</th>";
    echo "<th colspan='2' class='shift-subheader'>19:50 sd 06:59</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "<th>PM_200V(kWh)</th>";
    echo "<th>PM_220V(kWh)</th>";
    echo "</tr>";
}


// =======================================================================DPCHABPM200
// GET DATE
function getDataDPCHABPM200DateShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200DateShift1Awal = null;
    $formattedDateYesterday = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200DateShift1Awal = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM200DateShift1Awal;
}






// GET TIME
function getDataDPCHABPM200TimeShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200TimeShift1Awal = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200TimeShift1Awal = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM200TimeShift1Awal;
}



// GET KWH METER
function getDataDPCHABPM200Shift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200Shift1Awal = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200Shift1Awal = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM200Shift1Awal;
}



// =======================================================================DPCHABPM220
// GET DATE
function getDataDPCHABPM220DateShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220DateShift1Awal = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220DateShift1Awal = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220DateShift1Awal;
}
// GET TIME
function getDataDPCHABPM220TimeShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220TimeShift1Awal = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220TimeShift1Awal = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220TimeShift1Awal;
}

// GET KWH METER
function getDataDPCHABPM220Shift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220Shift1Awal = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220Shift1Awal = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220Shift1Awal;
}





// =======================================================================DPCHCDPM200
function getDataDPCHCDPM200DateShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200DateShift1Awal = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200DateShift1Awal = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200DateShift1Awal;
}
// GET TIME
function getDataDPCHCDPM200TimeShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200TimeShift1Awal = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200TimeShift1Awal = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200TimeShift1Awal;
}

// GET KWH METER
function getDataDPCHCDPM200Shift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200Shift1Awal = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200Shift1Awal = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200Shift1Awal;
}









// =======================================================================DPCHCDBPM220
// GET DATE
function getDataDPCHCDPM220DateShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220DateShift1Awal = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220DateShift1Awal = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220DateShift1Awal;
}
// GET TIME
function getDataDPCHCDPM220TimeShift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220TimeShift1Awal = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220TimeShift1Awal = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220TimeShift1Awal;
}

// GET KWH METER
function getDataDPCHCDPM220Shift1Awal(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220Shift1Awal = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '06:50:00' AND '08:00:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220Shift1Awal = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220Shift1Awal;
}









// ****************************shift2****************************
// GET DATE
function getDataDPCHABPM200DateShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200DateShift1Akhir = null;

    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";
          
          

    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200DateShift1Akhir = $row['date'];
        }
    }

    $conn->close(); 
    return $dataGetDataDPCHABPM200DateShift1Akhir;
}



// GET TIME
function getDataDPCHABPM200TimeShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200TimeShift1Akhir = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200TimeShift1Akhir = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM200TimeShift1Akhir;
}




// GET KWH METER
function getDataDPCHABPM200Shift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM200Shift1Akhir = null;

    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM200Shift1Akhir = $row['data_kwh_meter'];
        }
    }

    $conn->close(); 
    return $dataGetDataDPCHABPM200Shift1Akhir;
}











// =======================================================================DPCHABPM220
// GET DATE
function getDataDPCHABPM220DateShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220DateShift1Akhir = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220DateShift1Akhir = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220DateShift1Akhir;
}
// GET TIME
function getDataDPCHABPM220TimeShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220TimeShift1Akhir = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220TimeShift1Akhir = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220TimeShift1Akhir;
}

// GET KWH METER
function getDataDPCHABPM220Shift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHABPM220Shift1Akhir = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHABPM220Shift1Akhir = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHABPM220Shift1Akhir;
}









// =======================================================================DPCHCDPM200
function getDataDPCHCDPM200DateShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200DateShift1Akhir = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200DateShift1Akhir = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200DateShift1Akhir;
}
// GET TIME
function getDataDPCHCDPM200TimeShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200TimeShift1Akhir = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200TimeShift1Akhir = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200TimeShift1Akhir;
}

// GET KWH METER
function getDataDPCHCDPM200Shift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM200Shift1Akhir = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM200Shift1Akhir = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM200Shift1Akhir;
}







// =======================================================================DPCHCDBPM220
// GET DATE
function getDataDPCHCDPM220DateShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220DateShift1Akhir = null;
    $sql = "SELECT date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";
            
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220DateShift1Akhir = $row['date'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220DateShift1Akhir;
}
// GET TIME
function getDataDPCHCDPM220TimeShift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220TimeShift1Akhir = null;
    $sql = "SELECT time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";      
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220TimeShift1Akhir = $row['time'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220TimeShift1Akhir;
}

// GET KWH METER
function getDataDPCHCDPM220Shift1Akhir(){
    include 'getConnect.php'; 
    $dataGetDataDPCHCDPM220Shift1Akhir = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND TIME BETWEEN '19:40:00' AND '19:50:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $dataGetDataDPCHCDPM220Shift1Akhir = $row['data_kwh_meter'];
        }
    }
    $conn->close(); 
    return $dataGetDataDPCHCDPM220Shift1Akhir;
}



?>


























<!-- ---------------------------------------------------------------------------------------------------------------------- -->
<!--
    function table_info_energy_listrik_all_otics(){    
 include 'getConnect.php'; 
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

} -->
