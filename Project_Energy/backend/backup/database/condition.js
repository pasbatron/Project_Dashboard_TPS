var panel = msg.payload[0];
var power_meter = msg.payload[1];
var item = msg.payload[2];
var value = msg.payload[3];

// Map item codes to descriptions
if (item === "EE1") {
    item = "Active_Energy_Delivered_Into_Load";
} else if (item === "EE2") {
    item = "Active_Energy_Received_Out_of_Load";
} else if (item === "EE3") {
    item = "Active_Energy_Delivered_Plus_Received";
} else if (item === "EE4") {
    item = "Active_Energy_Delivered_Minus_Received";
} else if (item === "EE5") {
    item = "Reactive_Energy_Delivered";
} else if (item === "EE6") {
    item = "Reactive_Energy_Received";
} else if (item === "EE7") {
    item = "Reactive_Energy_Delivered_Plus_Received";
} else if (item === "EE8") {
    item = "Reactive_Energy_Delivered_Minus_Received";
} else if (item === "EE9") {
    item = "Apparent_Energy_Delivered";
} else if (item === "EE10") {
    item = "Apparent_Energy_Received";
} else if (item === "EE11") {
    item = "Apparent_Energy_Delivered_Plus_Received";
} else if (item === "EE12") {
    item = "Apparent_Energy_Delivered_Minus_Received";
} else if (item === "EE13") {
    item = "Current_A";
} else if (item === "EE14") {
    item = "Current_B";
} else if (item === "EE15") {
    item = "Current_C";
} else if (item === "EE16") {
    item = "Current_N";
} else if (item === "EE17") {
    item = "Current_G";
} else if (item === "EE18") {
    item = "Current_Avg";
} else if (item === "EE19") {
    item = "Current_Unbalance_A";
} else if (item === "EE20") {
    item = "Current_Unbalance_B";
} else if (item === "EE21") {
    item = "Current_Unbalance_C";
} else if (item === "EE22") {
    item = "Current_Unbalance_Worst";
} else if (item === "EE23") {
    item = "Voltage_A_B";
} else if (item === "EE24") {
    item = "Voltage_B_C";
} else if (item === "EE25") {
    item = "Voltage_C_A";
} else if (item === "EE26") {
    item = "Voltage_L_L_Avg";
} else if (item === "EE27") {
    item = "Voltage_A_N";
} else if (item === "EE28") {
    item = "Voltage_B_N";
} else if (item === "EE29") {
    item = "Voltage_C_N";
} else if (item === "EE30") {
    item = "Voltage_L_N_Avg";
} else if (item === "EE31") {
    item = "Voltage_Unbalance_A_B";
} else if (item === "EE32") {
    item = "Voltage_Unbalance_B_C";
} else if (item === "EE33") {
    item = "Voltage_Unbalance_C_A";
} else if (item === "EE34") {
    item = "Voltage_Unbalance_L_L_Worst";
} else if (item === "EE35") {
    item = "Voltage_Unbalance_A_N";
} else if (item === "EE36") {
    item = "Voltage_Unbalance_B_N";
} else if (item === "EE37") {
    item = "Voltage_Unbalance_C_N";
} else if (item === "EE38") {
    item = "Voltage_Unbalance_L_N_Worst";
} else if (item === "EE39") {
    item = "Active_Power_A";
} else if (item === "EE40") {
    item = "Active_Power_B";
} else if (item === "EE41") {
    item = "Active_Power_C";
} else if (item === "EE42") {
    item = "Active_Power_Total";
} else if (item === "EE43") {
    item = "Reactive_Power_A";
} else if (item === "EE44") {
    item = "Reactive_Power_B";
} else if (item === "EE45") {
    item = "Reactive_Power_C";
} else if (item === "EE46") {
    item = "Reactive_Power_Total";
} else if (item === "EE47") {
    item = "Apparent_Power_A";
} else if (item === "EE48") {
    item = "Apparent_Power_B";
} else if (item === "EE49") {
    item = "Apparent_Power_C";
} else if (item === "EE50") {
    item = "Apparent_Power_Total";
} else if (item === "EE51") {
    item = "Power_Factor_A";
} else if (item === "EE52") {
    item = "Power_Factor_B";
} else if (item === "EE53") {
    item = "Power_Factor_C";
} else if (item === "EE54") {
    item = "Power_Factor_Total";
} else if (item === "EE55") {
    item = "Displacement_Power_Factor_A";
} else if (item === "EE56") {
    item = "Displacement_Power_Factor_B";
} else if (item === "EE57") {
    item = "Displacement_Power_Factor_C";
} else if (item === "EE58") {
    item = "Displacement_Power_Factor_Total";
} else if (item === "EE59") {
    item = "Frequency";
}

// Insert data based on panel and power meter conditions
if (panel === "roller_arm" && power_meter === "PM_220") {
    msg.topic = "INSERT INTO PM_200_all_transit (register, item, value) VALUES ('nan', '" + item + "', '" + value + "');";
    return msg;
} else {
    return null; // If conditions are not met, do not return a message
}
