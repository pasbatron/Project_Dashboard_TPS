<?php require_once "connection.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/icon_pt_otics_1.png" type="image/icon type">
    <link rel="stylesheet" href="main_raspi.css">
    <title>PT.Otics Indonesia</title>
</head>
<body>
    <header>
        <nav>
            <img src="images/nav-1.png" alt="" srcset="">
        </nav>
    </header>
    <h2 id='note-title-table'>Monitoring Produksi Common Rail</h2>
    <div class="table-monitoring">
        <table>
            <thead>
                <tr>
                    <th colspan="6">Data Informasi Line</th>
                    <th colspan="10">Data Realtime</th>
                </tr>
                <tr>
                    <th rowspan="2">No</th>
                    <th rowspan="2">PG</th>
                    <th rowspan="2">Line</th>
                    <th rowspan="2">Cycle Time(s)</th>
                    <th rowspan="2">Target Eff(%)</th>
                    <th rowspan="2">Target Pcs/Jam</th>
                    <th rowspan="2">Waktu</th>
                    <th rowspan="2">Loading Time(Min)</th>
                    <th rowspan="2">Target(Pcs)</th>
                    <th rowspan="2">Actual(Pcs)</th>
                    <th rowspan="2">Actual Eff(%)</th>
                    <th colspan="2">Delay</th>
                    <th rowspan="2">Status</th>
                </tr>
                <tr>
                    <th>Pcs</th>
                    <th>Time(Min)</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                    $line_ids = array(
                        '1','2','3','4','5','6','7','8','9','10','11','12',
                        '13A', '13B', '14A', '14B', '15A', '15B', '16', '17', '18A', '18B', '19', '20',
                        '21A', '21B', '22A', '22B', '22C', '22D', '23A', '23B', '23C', '23D', '24A', '24B',
                        '24C', '24D', '25', '26', '27A', '27B', '27C', '27', '28A', '28B', '29A', '29B',
                        '30A', '30B', '30C', '30D', '30E', '31A', '31B', '31C', '31D', '31E', '32A', '32B',
                        '32C', '32D', '32E', '33', '34A', '34B', '34C', '34D', '34E', '34F', '34G', '34H',
                        '34I', '34J', '34K', '34L', '34M', '34N', '34O', '34P', '34Q', '34R', '35A', '35B',
                        '35C', '35D', '35E', '35F', '35G', '35H', '35I', '35J', '35K', '35L', '35M',
                        '35N', '35O', '35P', '35Q', '35R', '35S', '35T', '35U', '35V', '35W', '35X',
                        '35Y', '35Z', '35AA', '35AB', '35AC', '35AD'
                    );
                    $limited_line_ids = array_slice($line_ids, 0, 12);
                    foreach ($limited_line_ids as $line_id) {
                        $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = ? ORDER BY id DESC LIMIT 1";
                        $statement = mysqli_prepare($connection, $sql);
                        mysqli_stmt_bind_param($statement, "s", $line_id);
                        mysqli_stmt_execute($statement);
                        $result = mysqli_stmt_get_result($statement);
                        $row = mysqli_fetch_assoc($result);
                        if ($row) {
                            $status_class = $row['status'] == 'NORMAL' ? 'NORMAL' : 'ABNORMAL';
                            $row['status'] == 0 ? $status_class = 'STOPLINE' and  $row['status'] = 'STOP LINE': $row['status'];

                            //menentukan cycle time
                            $cycle_time = number_format(((float)$row['cycle_time'] / 10), 1); 
                            // $cycle_time_on_top = (string)$cycle_time;
                            
                            //menentukan efisiensi aktual
                            $efficiency = (int)$row['efficiency'] / 10;
                            // $efficiency_on_top = (string)$efficiency;   

                            //menentukan delay pcs
                            $data_delay_actual = (int)$row['actual'];
                            $data_delay_target = (int)$row['target'];
                            $delay_pcs = $data_delay_target - $data_delay_actual;
                            if($delay_pcs < 0){
                                $delay_pcs = '0';
                            }

                            //menentukan target efisiensi
                             
                            $loading_time = (float)$row['loading_time'];
                            $target_efficiency_data_ct = (int)$row['cycle_time'];
                            $eff_data_target = (float)$row['target'];
                            $row['loading_time'] > 0 ? $target_efficiency = number_format(((($eff_data_target * $target_efficiency_data_ct) / ($loading_time * 60)) * 10), 1) : $loading_time = '0';

                            //menentukan target produk perjam
                            $target_efficiency_data_ct > 0 ? $target_product_per_jam = number_format((((3600 * $target_efficiency)/ $target_efficiency_data_ct)/10),1) :  $target_efficiency_data_ct = '0';

                            echo "<tr>";
                            echo "<td>$line_id</td>";
                            echo "<td>{$row['pg']}</td>";
                            echo "<td>Common Rail $line_id</td>";
                            echo "<td>{$cycle_time}</td>";
                            echo "<td>{$target_efficiency}</td>";
                            echo "<td>{$target_product_per_jam}</td>";
                            echo "<td>{$row['date']}-{$row['time']}</td>";
                            echo "<td>{$row['loading_time']}</td>"; 
                            echo "<td>{$row['target']}</td>";
                            echo "<td>{$row['actual']}</td>";
                            echo "<td>{$efficiency}</td>";
                            echo "<td>{$delay_pcs}</td>";
                            echo "<td>{$row['delay']}</td>";
                            echo "<td id='table-colom-status' class='$status_class'>{$row['status']}</td>";
                            echo "</tr>";
                        } else {
                            echo "<tr><td colspan='12'>Tidak ada data untuk $line_id</td></tr>";
                        }
                    }
                ?>
            </tbody>
        </table>
        <p id="note-update">Update : Setiap 1 Menit</p>
    </div>
    <script>
        setInterval(function(){
            location.reload();
        }, 60000);
    </script>
</body>
</html>
<?php mysqli_close($connection); ?>












