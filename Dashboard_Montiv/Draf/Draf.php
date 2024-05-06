// $pcs_jam_act = (int)$row['actual'];
// $pcs_loading_time = (int)$row['loading_time'];
// $pcs_jam = round(($pcs_jam_act / ($pcs_loading_time/60)));
// $pcs_per_jam = (string)$pcs_jam;


// echo "<td>{$pcs_per_jam}</td>";


$delay_pcs = (int)$row['delay'];
$delay_ct = (int)$row['cycle_time'];
$delay_ct == 0 ? $delay_ct = 1 : $delay_pcs_on_top = 0;
$delay_pcs_on = round((($delay_pcs * 60) / ($delay_ct)) * 10);
$delay_pcs_on_top = (string)$delay_pcs_on;



<!-- <th rowspan="2">Cap/Jam</th> -->