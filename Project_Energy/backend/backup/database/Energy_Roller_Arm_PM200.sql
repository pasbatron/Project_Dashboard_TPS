-- Current Measurements

CREATE TABLE PM_200_all_transit (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);





CREATE TABLE PM_200_Current_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);


CREATE TABLE PM_200_Current_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_G (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_Avg (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_Unbalance_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_Unbalance_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_Unbalance_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Current_Unbalance_Worst (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Voltage Measurements
CREATE TABLE PM_200_Voltage_A_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_B_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_C_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_L_L_Avg (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_A_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_B_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_C_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_L_N_Avg (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_A_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_B_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_C_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_L_L_Worst (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_A_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATE,
    data_time TIME,
    register VARCHAR(50),
    item VARCHAR(50,
    value VARCHAR(50)
);

CREATE TABLE PM_200_Voltage_Unbalance_B_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_C_N (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Unbalance_L_N_Worst (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Active Power Measurements
CREATE TABLE PM_200_Active_Power_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Power_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Power_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Power_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Repeat for Reactive Power, Apparent Power, Power Factor, Frequency,
-- Frequency Unbalance, Active Energy, Reactive Energy, Apparent Energy,
-- Active Demand, Reactive Demand, Apparent Demand, Demand Factor, 
-- and Alarm Tables

-- Add tables similarly for each remaining item


























-- Reactive Power Measurements
CREATE TABLE PM_200_Reactive_Power_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Power_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Power_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Power_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Apparent Power Measurements
CREATE TABLE PM_200_Apparent_Power_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Power_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Power_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Power_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Power Factor Measurements
CREATE TABLE PM_200_Power_Factor_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Power_Factor_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Power_Factor_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Power_Factor_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Frequency Measurements
CREATE TABLE PM_200_Frequency_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Avg (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Unbalance_A_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Unbalance_B_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Unbalance_C_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Unbalance_Worst (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Active Energy Measurements
CREATE TABLE PM_200_Active_Energy_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Energy_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Energy_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Energy_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Reactive Energy Measurements
CREATE TABLE PM_200_Reactive_Energy_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Energy_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Energy_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Energy_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Apparent Energy Measurements
CREATE TABLE PM_200_Apparent_Energy_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Energy_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Energy_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Energy_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Active Demand Measurements
CREATE TABLE PM_200_Active_Demand_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Demand_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Demand_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Active_Demand_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Reactive Demand Measurements
CREATE TABLE PM_200_Reactive_Demand_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Demand_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Demand_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Reactive_Demand_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Apparent Demand Measurements
CREATE TABLE PM_200_Apparent_Demand_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Demand_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Demand_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Apparent_Demand_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Demand Factor Measurements
CREATE TABLE PM_200_Demand_Factor_A (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Demand_Factor_B (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Demand_Factor_C (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Demand_Factor_Total (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Alarms
CREATE TABLE PM_200_Current_Alarm (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Voltage_Alarm (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Power_Alarm (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Frequency_Alarm (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

CREATE TABLE PM_200_Energy_Alarm (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    register VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    item VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    value VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);

-- Add other necessary tables here following the same structure

