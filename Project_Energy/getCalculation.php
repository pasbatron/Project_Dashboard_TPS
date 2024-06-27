<?php 

include 'getTemplateBase.php';


$dataGetDataDPCHABPM200Shift1Awal = getDataDPCHABPM200Shift1Awal();
$dataGetDataDPCHABPM220Shift1Awal = getDataDPCHABPM220Shift1Awal();
$dataGetDataDPCHCDPM200Shift1Awal = getDataDPCHCDPM200Shift1Awal();
$dataGetDataDPCHCDPM220Shift1Awal = getDataDPCHCDPM220Shift1Awal();

$dataGetDataDPCHABPM200Shift1Akhir = getDataDPCHABPM200Shift1Akhir();
$dataGetDataDPCHABPM220Shift1Akhir = getDataDPCHABPM220Shift1Akhir();
$dataGetDataDPCHCDPM200Shift1Akhir = getDataDPCHCDPM200Shift1Akhir();
$dataGetDataDPCHCDPM220Shift1Akhir = getDataDPCHCDPM220Shift1Akhir();

// Casting int
$dataGetDataDPCHABPM200Awal = (int) $dataGetDataDPCHABPM200Shift1Awal;
$dataGetDataDPCHABPM220Awal = (int) $dataGetDataDPCHABPM220Shift1Awal;
$dataGetDataDPCHCDPM200Awal = (int) $dataGetDataDPCHCDPM200Shift1Awal;
$dataGetDataDPCHCDPM220Awal = (int) $dataGetDataDPCHCDPM220Shift1Awal;

$dataGetDataDPCHABPM200Akhir = (int) $dataGetDataDPCHABPM200Shift1Akhir;
$dataGetDataDPCHABPM220Akhir = (int) $dataGetDataDPCHABPM220Shift1Akhir;
$dataGetDataDPCHCDPM200Akhir = (int) $dataGetDataDPCHCDPM200Shift1Akhir;
$dataGetDataDPCHCDPM220Akhir = (int) $dataGetDataDPCHCDPM220Shift1Akhir;


$totalDPCHABPM200Shift1 = $dataGetDataDPCHABPM200Awal - $dataGetDataDPCHABPM200Awal;
echo $totalDPCHABPM200Shift1;
