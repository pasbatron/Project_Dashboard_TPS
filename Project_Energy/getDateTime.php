<?php 

// GET DATE
function getDateNow(){
    $formattedDateToday = date('Y-m-d');
    return $formattedDateToday;
}
function getDateYesterday(){
    $formattedDateYesterday = date('Y-m-d', strtotime('-1 day'));
    return $formattedDateYesterday;
}
