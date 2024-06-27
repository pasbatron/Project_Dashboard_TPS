<?php
include 'getDateTime.php';

function header_table(){
    echo "<table>";
    echo "<tr>";
    echo "<th rowspan='3'>Date</th>";
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



// Function to get the kWh meter value for Area A
function DPCHABPM200AreaA() {
    include 'getConnect.php';
    $dateNow = getDateNow(); 
    $kwhDPCHABPM200AreaA = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_date = '$dateNow' 
              AND data_time BETWEEN '06:50:00' AND '07:30:00' 
            ORDER BY id DESC 
            LIMIT 1";
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwhDPCHABPM200AreaA = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwhDPCHABPM200AreaA;
}
// Function to get the kWh meter value for Area B
function DPCHABPM200AreaB() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '19:40:00' AND '19:50:00' 
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}
// Function to get the kWh meter value for Area C
function DPCHABPM200AreaC() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '06:50:00' AND '07:30:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}


// Function to get the date for Area A
function DPCHABPM200AreaADate() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaA = DPCHABPM200AreaA();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area B
function DPCHABPM200AreaBDate() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaB = DPCHABPM200AreaB();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area C
function DPCHABPM200AreaCDate() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaC = DPCHABPM200AreaC();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
function DPCHABPM200AreaATime() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaA = DPCHABPM200AreaA();
    $data_date = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area B
function DPCHABPM200AreaBTime() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaB = DPCHABPM200AreaB();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area C
function DPCHABPM200AreaCTime() {
    include 'getConnect.php';
    $dataDPCHABPM200AreaC = DPCHABPM200AreaC();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 200V' 
              AND data_kwh_meter = '$dataDPCHABPM200AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}








































// Function to get the kWh meter value for Area A
function DPCHABPM220AreaA() {
    include 'getConnect.php';
    $dateNow = getDateNow(); 
    $kwhDPCHABPM220AreaA = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_date = '$dateNow' 
              AND data_time BETWEEN '06:50:00' AND '07:30:00' 
            ORDER BY id DESC 
            LIMIT 1";
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwhDPCHABPM220AreaA = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwhDPCHABPM220AreaA;
}
// Function to get the kWh meter value for Area B
function DPCHABPM220AreaB() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '19:40:00' AND '19:50:00' 
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}
// Function to get the kWh meter value for Area C
function DPCHABPM220AreaC() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '06:50:00' AND '07:30:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}


// Function to get the date for Area A
function DPCHABPM220AreaADate() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaA = DPCHABPM220AreaA();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area B
function DPCHABPM220AreaBDate() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaB = DPCHABPM220AreaB();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area C
function DPCHABPM220AreaCDate() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaC = DPCHABPM220AreaC();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
function DPCHABPM220AreaATime() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaA = DPCHABPM220AreaA();
    $data_date = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area B
function DPCHABPM220AreaBTime() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaB = DPCHABPM220AreaB();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area C
function DPCHABPM220AreaCTime() {
    include 'getConnect.php';
    $dataDPCHABPM220AreaC = DPCHABPM220AreaC();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 220V' 
              AND data_kwh_meter = '$dataDPCHABPM220AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}











































// Function to get the kWh meter value for Area A
function DPCHCDPM200AreaA() {
    include 'getConnect.php';
    $dateNow = getDateNow(); 
    $kwhDPCHCDPM200AreaA = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_date = '$dateNow' 
              AND data_time BETWEEN '06:50:00' AND '07:30:00' 
            ORDER BY id DESC 
            LIMIT 1";
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwhDPCHCDPM200AreaA = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwhDPCHCDPM200AreaA;
}
// Function to get the kWh meter value for Area B
function DPCHCDPM200AreaB() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '19:40:00' AND '19:50:00' 
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}
// Function to get the kWh meter value for Area C
function DPCHCDPM200AreaC() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '06:50:00' AND '07:30:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}


// Function to get the date for Area A
function DPCHCDPM200AreaADate() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaA = DPCHCDPM200AreaA();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area B
function DPCHCDPM200AreaBDate() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaB = DPCHCDPM200AreaB();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area C
function DPCHCDPM200AreaCDate() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaC = DPCHCDPM200AreaC();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
function DPCHCDPM200AreaATime() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaA = DPCHCDPM200AreaA();
    $data_date = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area B
function DPCHCDPM200AreaBTime() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaB = DPCHCDPM200AreaB();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area C
function DPCHCDPM200AreaCTime() {
    include 'getConnect.php';
    $dataDPCHCDPM200AreaC = DPCHCDPM200AreaC();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 3F' 
              AND data_kwh_meter = '$dataDPCHCDPM200AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

























// Function to get the kWh meter value for Area A
function DPCHCDPM220AreaA() {
    include 'getConnect.php';
    $dateNow = getDateNow(); 
    $kwhDPCHCDPM220AreaA = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_date = '$dateNow' 
              AND data_time BETWEEN '06:50:00' AND '07:30:00' 
            ORDER BY id DESC 
            LIMIT 1";
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwhDPCHCDPM220AreaA = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwhDPCHCDPM220AreaA;
}
// Function to get the kWh meter value for Area B
function DPCHCDPM220AreaB() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '19:40:00' AND '19:50:00' 
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}
// Function to get the kWh meter value for Area C
function DPCHCDPM220AreaC() {
    include 'getConnect.php'; 
    $dateYesterday = getDateYesterday();
    $kwh = null;
    $sql = "SELECT data_kwh_meter 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_date = '$dateYesterday'
              AND data_time BETWEEN '06:50:00' AND '07:30:00'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $kwh = $row['data_kwh_meter'];
    }
    $conn->close(); 
    return $kwh;
}


// Function to get the date for Area A
function DPCHCDPM220AreaADate() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaA = DPCHCDPM220AreaA();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area B
function DPCHCDPM220AreaBDate() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaB = DPCHCDPM220AreaB();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
// Function to get the date for Area C
function DPCHCDPM220AreaCDate() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaC = DPCHCDPM220AreaC();
    $data_date = null;
    $sql = "SELECT data_date 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_date = $row['data_date'];
    }
    $conn->close(); 
    return $data_date;
}
function DPCHCDPM220AreaATime() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaA = DPCHCDPM220AreaA();
    $data_date = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaA'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area B
function DPCHCDPM220AreaBTime() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaB = DPCHCDPM220AreaB();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaB'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}

// Function to get the date for Area C
function DPCHCDPM220AreaCTime() {
    include 'getConnect.php';
    $dataDPCHCDPM220AreaC = DPCHCDPM220AreaC();
    $data_time = null;
    $sql = "SELECT data_time 
            FROM table_all_energy 
            WHERE name_power_meter = 'POWER METER 1F' 
              AND data_kwh_meter = '$dataDPCHCDPM220AreaC'
            ORDER BY id DESC 
            LIMIT 1";    
    $result = $conn->query($sql);
    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data_time = $row['data_time'];
    }
    $conn->close(); 
    return $data_time;
}



































// KWH
$dataDPCHABPM200AreaA = (int) DPCHABPM200AreaA();
$dataDPCHABPM200AreaB = (int) DPCHABPM200AreaB();
$dataDPCHABPM200AreaC = (int) DPCHABPM200AreaC();
$dataDPCHABPM220AreaA = (int) DPCHABPM220AreaA();
$dataDPCHABPM220AreaB = (int) DPCHABPM220AreaB();
$dataDPCHABPM220AreaC = (int) DPCHABPM220AreaC();


$dataDPCHCDPM200AreaA = (int) DPCHCDPM200AreaA();
$dataDPCHCDPM200AreaB = (int) DPCHCDPM200AreaB();
$dataDPCHCDPM200AreaC = (int) DPCHCDPM200AreaC();
$dataDPCHCDPM220AreaA = (int) DPCHCDPM220AreaA();
$dataDPCHCDPM220AreaB = (int) DPCHCDPM220AreaB();
$dataDPCHCDPM220AreaC = (int) DPCHCDPM220AreaC();



// DATE
$dataDPCHABPM200AreaADate =  DPCHABPM200AreaADate();
$dataDPCHABPM200AreaBDate =  DPCHABPM200AreaBDate();
$dataDPCHABPM200AreaCDate =  DPCHABPM200AreaCDate();
$dataDPCHABPM220AreaADate =  DPCHABPM220AreaADate();
$dataDPCHABPM220AreaBDate =  DPCHABPM220AreaBDate();
$dataDPCHABPM220AreaCDate =  DPCHABPM220AreaCDate();

$dataDPCHCDPM200AreaADate =  DPCHCDPM200AreaADate();
$dataDPCHCDPM200AreaBDate =  DPCHCDPM200AreaBDate();
$dataDPCHCDPM200AreaCDate =  DPCHCDPM200AreaCDate();
$dataDPCHCDPM220AreaADate =  DPCHCDPM220AreaADate();
$dataDPCHCDPM220AreaBDate =  DPCHCDPM220AreaBDate();
$dataDPCHCDPM220AreaCDate =  DPCHCDPM220AreaCDate();




// TIME
$dataDPCHABPM200AreaATime =  DPCHABPM200AreaATime();
$dataDPCHABPM200AreaBTime =  DPCHABPM200AreaBTime();
$dataDPCHABPM200AreaCTime =  DPCHABPM200AreaCTime();
$dataDPCHABPM220AreaATime =  DPCHABPM220AreaATime();
$dataDPCHABPM220AreaBTime =  DPCHABPM220AreaBTime();
$dataDPCHABPM220AreaCTime =  DPCHABPM220AreaCTime();

$dataDPCHCDPM200AreaATime =  DPCHCDPM200AreaATime();
$dataDPCHCDPM200AreaBTime =  DPCHCDPM200AreaBTime();
$dataDPCHCDPM200AreaCTime =  DPCHCDPM200AreaCTime();
$dataDPCHCDPM220AreaATime =  DPCHCDPM220AreaATime();
$dataDPCHCDPM220AreaBTime =  DPCHCDPM220AreaBTime();
$dataDPCHCDPM220AreaCTime =  DPCHCDPM220AreaCTime();


$kwhtotalDPCHABPM200shift1 = round((($dataDPCHABPM200AreaB - $dataDPCHABPM200AreaC) / 1000),0);
$kwhtotalDPCHABPM200shift2 = round((($dataDPCHABPM200AreaA - $dataDPCHABPM200AreaB) / 1000),0);
$kwhtotalDPCHABPM220shift1 = round((($dataDPCHABPM220AreaB - $dataDPCHABPM220AreaC) / 1000),0);
$kwhtotalDPCHABPM220shift2 = round((($dataDPCHABPM220AreaA - $dataDPCHABPM220AreaB) / 1000),0);

$kwhtotalDPCHCDPM200shift1 = round((($dataDPCHCDPM200AreaB - $dataDPCHCDPM200AreaC) / 1000),0);
$kwhtotalDPCHCDPM200shift2 = round((($dataDPCHCDPM200AreaA - $dataDPCHCDPM200AreaB) / 1000),0);
$kwhtotalDPCHCDPM220shift1 = round((($dataDPCHCDPM220AreaB - $dataDPCHCDPM220AreaC) / 1000),0);
$kwhtotalDPCHCDPM220shift2 = round((($dataDPCHCDPM220AreaA - $dataDPCHCDPM220AreaB) / 1000),0);





// echo $dataDPCHABPM200AreaADate;
// echo " - ";
// echo $dataDPCHABPM200AreaATime;
// echo " --- ";
// echo " = ";
// echo $dataDPCHABPM200AreaA;
// echo "---------------";
// echo $dataDPCHABPM200AreaBDate;
// echo " - ";
// echo $dataDPCHABPM200AreaBTime;
// echo " - ";
// echo " = ";
// echo $dataDPCHABPM200AreaB;
// echo "---------------";
// echo $dataDPCHABPM200AreaCDate;
// echo " - ";
// echo $dataDPCHABPM200AreaCTime;
// echo " - ";
// echo " = ";
// echo $dataDPCHABPM200AreaC;
// echo "---------------";
// echo "total shift1 = ";
// echo ($kwhtotalshift1 / 1000) . " kwh";



?>
