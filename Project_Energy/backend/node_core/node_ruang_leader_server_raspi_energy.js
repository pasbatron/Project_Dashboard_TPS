[
    {
        "id": "a384b234f2e176db",
        "type": "debug",
        "z": "427da6dc73857e3a",
        "name": "Serial_COM_After",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 430,
        "y": 200,
        "wires": []
    },
    {
        "id": "6a0d2dc5d38d29e1",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_AB==>PM_200, PM_220 (watt_hour)",
        "func": "\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\n\nif (panel === \"DPCH\" && power_meter === \"PM-200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"DPCH\" && power_meter === \"PM-220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 580,
        "wires": [
            [
                "6e5ed6867e2bfbb1"
            ]
        ]
    },
    {
        "id": "978fc3b11947812c",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_CD==>PM_200, PM_220 (watt_hour)",
        "func": "\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\n\nif (panel === \"DPCH-CD\" && power_meter === \"PM-3F\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"DPCH-CD\" && power_meter === \"PM-1F\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 620,
        "wires": [
            [
                "0da1769fb9ac5d62"
            ]
        ]
    },
    {
        "id": "628ea0b01550ac90",
        "type": "string",
        "z": "427da6dc73857e3a",
        "name": "filter",
        "methods": [
            {
                "name": "between",
                "params": [
                    {
                        "type": "str",
                        "value": "*"
                    },
                    {
                        "type": "str",
                        "value": "#"
                    }
                ]
            },
            {
                "name": "split",
                "params": [
                    {
                        "type": "str",
                        "value": ","
                    },
                    {
                        "type": "num",
                        "value": "30"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 310,
        "y": 320,
        "wires": [
            [
                "6a0d2dc5d38d29e1",
                "978fc3b11947812c",
                "78165f9f6c62a027",
                "850b731e5e95c637",
                "ee64f448cb692077",
                "a384b234f2e176db",
                "bbd28d90439e5130",
                "c376986a0a3d234d",
                "4bbd44a0eff51d66"
            ]
        ]
    },
    {
        "id": "6e5ed6867e2bfbb1",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "c71a6b8879d1e5c0",
        "name": "",
        "x": 740,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "0da1769fb9ac5d62",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "bebd24bb4fd34e2f",
        "name": "",
        "x": 740,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "c3db30588b1c3275",
        "type": "serial in",
        "z": "427da6dc73857e3a",
        "name": "",
        "serial": "3dd901a47a1781df",
        "x": 130,
        "y": 180,
        "wires": [
            [
                "943645d57e0542cf",
                "e01c8d7302bfa3ca",
                "e8dc82a6afe2ccfe",
                "74e52296bda0e8d3",
                "2341e37714485732",
                "628ea0b01550ac90"
            ]
        ]
    },
    {
        "id": "943645d57e0542cf",
        "type": "string",
        "z": "427da6dc73857e3a",
        "name": "filter_first",
        "methods": [
            {
                "name": "between",
                "params": [
                    {
                        "type": "str",
                        "value": "*"
                    },
                    {
                        "type": "str",
                        "value": "#"
                    }
                ]
            },
            {
                "name": "split",
                "params": [
                    {
                        "type": "str",
                        "value": ","
                    },
                    {
                        "type": "num",
                        "value": "30"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 380,
        "y": 60,
        "wires": [
            [
                "95042d19d0254d6f"
            ]
        ]
    },
    {
        "id": "95042d19d0254d6f",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "query_sql_energy",
        "func": "var name_panel\nvar name_power_meter\nvar data_kwh_meter\n\nname_panel = msg.payload[1]\nname_power_meter = msg.payload[2]\ndata_kwh_meter = msg.payload[3]\n\n\nif (name_panel == \"DPCH\" && name_power_meter == \"PM-220V\") {\n    var name_panel_database = \"DISTRIBUTION PANEL CAMP HOUSING\";\n    var name_power_meter_database = \"POWER METER 220V\"\n    msg.topic = \"INSERT INTO table_all_energy (id, name_panel, name_power_meter, data_kwh_meter) values (null, '\" + name_panel_database + \"','\" + name_power_meter_database + \"', '\" + data_kwh_meter + \"');\"\n} else if (name_panel == \"DPCH\" && name_power_meter == \"PM-200V\") {\n    var name_panel_database = \"DISTRIBUTION PANEL CAMP HOUSING\";\n    var name_power_meter_database = \"POWER METER 200V\"\n    msg.topic = \"INSERT INTO table_all_energy (id, name_panel, name_power_meter, data_kwh_meter) values (null, '\" + name_panel_database + \"','\" + name_power_meter_database + \"', '\" + data_kwh_meter + \"');\"\n} else if (name_panel == \"DPCH-CD\" && name_power_meter == \"PM-3F\") {\n    var name_panel_database = \"DISTRIBUTION PANEL CAMP HOUSING C & D\";\n    var name_power_meter_database = \"POWER METER 3F\"\n    msg.topic = \"INSERT INTO table_all_energy (id, name_panel, name_power_meter, data_kwh_meter) values (null, '\" + name_panel_database + \"','\" + name_power_meter_database + \"', '\" + data_kwh_meter + \"');\"\n} else if (name_panel == \"DPCH-CD\" && name_power_meter == \"PM-1F\") {\n    var name_panel_database = \"DISTRIBUTION PANEL CAMP HOUSING C & D\";\n    var name_power_meter_database = \"POWER METER 1F\"\n    msg.topic = \"INSERT INTO table_all_energy (id, name_panel, name_power_meter, data_kwh_meter) values (null, '\" + name_panel_database + \"','\" + name_power_meter_database + \"', '\" + data_kwh_meter + \"');\"\n} else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 100,
        "wires": [
            [
                "54197214b4a68a7c"
            ]
        ]
    },
    {
        "id": "54197214b4a68a7c",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "de33f8dbe22463fe",
        "name": "",
        "x": 620,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "78165f9f6c62a027",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_SAA==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"CH_SAA\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"CH_SAA\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 700,
        "wires": [
            [
                "62c946b3a71bb31c"
            ]
        ]
    },
    {
        "id": "850b731e5e95c637",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_SAB==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"CH_SAB\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"CH_SAB\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 740,
        "wires": [
            [
                "210737aa3524f259"
            ]
        ]
    },
    {
        "id": "ee64f448cb692077",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_EF==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"CH_EF\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"CH_EF\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 660,
        "wires": [
            [
                "de1378c183e84493"
            ]
        ]
    },
    {
        "id": "bbd28d90439e5130",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CH_SAC==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"CH_SAC\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"CH_SAC\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 780,
        "wires": [
            [
                "c3262f3db76b6dd3"
            ]
        ]
    },
    {
        "id": "c376986a0a3d234d",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_CC_234==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"CC_234\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"CC_234\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 820,
        "wires": [
            [
                "7b31e7a231372a41"
            ]
        ]
    },
    {
        "id": "de1378c183e84493",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "257c55675ac7787d",
        "name": "",
        "x": 740,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "e01c8d7302bfa3ca",
        "type": "debug",
        "z": "427da6dc73857e3a",
        "name": "Serial_COM",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 130,
        "y": 120,
        "wires": []
    },
    {
        "id": "62c946b3a71bb31c",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "42a2103475722fa2",
        "name": "",
        "x": 750,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "210737aa3524f259",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "43a8f81ce7e2d29c",
        "name": "",
        "x": 750,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "7b31e7a231372a41",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "456d059a55d7408f",
        "name": "",
        "x": 730,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "c3262f3db76b6dd3",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "6c729da0af6f0887",
        "name": "",
        "x": 750,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "4bbd44a0eff51d66",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "DP_RET==>PM_200, PM_220 (watt_hour)",
        "func": "// PM_1200_DP_CH_AB\nvar panel = msg.payload[1]\nvar power_meter = msg.payload[2]\nvar total_watt_hour = msg.payload[3]\n\nif (panel === \"RET\" && power_meter === \"PM_200V\") {\n    msg.topic = \"INSERT INTO table_pm200_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}\nif (panel === \"RET\" && power_meter === \"PM_220V\") {\n    msg.topic = \"INSERT INTO table_pm220_data_watt_hour (id, power_meter, total_watt_hour) values(null, '\" + power_meter + \"','\" + total_watt_hour + \"');\"\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 860,
        "wires": [
            [
                "1f2c35f1e29a5cee"
            ]
        ]
    },
    {
        "id": "1f2c35f1e29a5cee",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "9303153eac5cda13",
        "name": "",
        "x": 700,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "c3231627f34840b5",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "KUBIKAL==>(watt_hour)",
        "func": "// PM_KUBIKAL\nvar data_code = msg.payload[1]\nvar value_code = msg.payload[2]\n\n\n\nif (data_code === \"DA_01\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Into_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_02\") {\n    msg.topic = \"INSERT INTO Active_Energy_Received_Out_of_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_03\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_04\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_05\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_06\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_07\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_08\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_09\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_10\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_11\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_12\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_13\") {\n    msg.topic = \"INSERT INTO Current_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_14\") {\n    msg.topic = \"INSERT INTO Current_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_15\") {\n    msg.topic = \"INSERT INTO Current_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_16\") {\n    msg.topic = \"INSERT INTO Current_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_17\") {\n    msg.topic = \"INSERT INTO Current_G (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_18\") {\n    msg.topic = \"INSERT INTO Current_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_19\") {\n    msg.topic = \"INSERT INTO Voltage_A_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_20\") {\n    msg.topic = \"INSERT INTO Voltage_B_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_21\") {\n    msg.topic = \"INSERT INTO Voltage_C_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_22\") {\n    msg.topic = \"INSERT INTO Voltage_L_L_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_23\") {\n    msg.topic = \"INSERT INTO Voltage_A_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_24\") {\n    msg.topic = \"INSERT INTO Voltage_B_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_25\") {\n    msg.topic = \"INSERT INTO Voltage_C_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_26\") {\n    msg.topic = \"INSERT INTO Voltage_L_N_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_27\") {\n    msg.topic = \"INSERT INTO Active_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_28\") {\n    msg.topic = \"INSERT INTO Active_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_29\") {\n    msg.topic = \"INSERT INTO Active_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_30\") {\n    msg.topic = \"INSERT INTO Active_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_31\") {\n    msg.topic = \"INSERT INTO Reactive_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_32\") {\n    msg.topic = \"INSERT INTO Reactive_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_33\") {\n    msg.topic = \"INSERT INTO Reactive_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_34\") {\n    msg.topic = \"INSERT INTO Reactive_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_35\") {\n    msg.topic = \"INSERT INTO Apparent_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_36\") {\n    msg.topic = \"INSERT INTO Apparent_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_37\") {\n    msg.topic = \"INSERT INTO Apparent_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_38\") {\n    msg.topic = \"INSERT INTO Apparent_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_39\") {\n    msg.topic = \"INSERT INTO Power_Factor_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_40\") {\n    msg.topic = \"INSERT INTO Power_Factor_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_41\") {\n    msg.topic = \"INSERT INTO Power_Factor_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_42\") {\n    msg.topic = \"INSERT INTO Power_Factor_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_43\") {\n    msg.topic = \"INSERT INTO Frequency (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_44\") {\n    msg.topic = \"INSERT INTO Year (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_45\") {\n    msg.topic = \"INSERT INTO Month (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_46\") {\n    msg.topic = \"INSERT INTO Day (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_47\") {\n    msg.topic = \"INSERT INTO Hour (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_48\") {\n    msg.topic = \"INSERT INTO Minute (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_49\") {\n    msg.topic = \"INSERT INTO Second (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 730,
        "y": 960,
        "wires": [
            [
                "1fc5a503b16bb696"
            ]
        ]
    },
    {
        "id": "1fc5a503b16bb696",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "b2fb125af19ea97c",
        "name": "",
        "x": 990,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "a0932c442fa5eb26",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "query_sql_montiv",
        "func": "var line_id\nvar name_product\nvar target\nvar actual\nvar loading_time\nvar efficiency\nvar delay\nvar cycle_time\nvar status_montiv\nvar loading_time\nvar status_hikitori\nvar time_trouble\nvar time_trouble_quality\nvar andon\nvar line_name\nvar pg\n\nline_id = msg.payload[0]\nname_product = msg.payload[1]\ntarget = msg.payload[2]\nactual = msg.payload[3]\nloading_time = msg.payload[4]\nefficiency = msg.payload[5]\ndelay = msg.payload[6]\ncycle_time = msg.payload[7]\nstatus_montiv = msg.payload[8]\ntime_trouble = msg.payload[9]\ntime_trouble_quality = msg.payload[10]\nandon = msg.payload[11]\n\nif (line_id === \"1\") {\n    line_name = 'Common Rail 1'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"2\") {\n    line_name = 'Common Rail 2'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"3\") {\n    line_name = 'Common Rail 3'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"4\") {\n    line_name = 'Common Rail 4'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"5\") {\n\n    line_name = 'Common Rail 5'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"6\") {\n    line_name = 'Common Rail 6'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"7\") {\n    line_name = 'Common Rail 7'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"8\") {\n    line_name = 'Common Rail 8'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"9\") {\n    line_name = 'Common Rail 9'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"10\") {\n    line_name = 'Common Rail 10'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"11\") {\n    line_name = 'Common Rail 11'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"12\") {\n    line_name = 'Common Rail 12'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"13\") {\n    line_name = 'Common Rail 13'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id === \"13A\") {\n    line_name = 'Cam housing A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}  \nelse if (line_id === \"13B\") {\n    line_name = 'Cam housing B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id === \"14\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values (null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"14A\") {\n    line_name = 'Cam housing C'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"14B\") {\n    line_name = 'Cam housing D'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"15\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"15A\") {\n    line_name = 'Cam housing E NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"15B\") {\n    line_name = 'Cam housing E D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"16\") {\n    line_name = 'Cam housing Assy A'\n    pg = 'PG2.3'\n}\n\nelse if (line_id === \"17\") {\n    line_name = 'Cam housing Assy B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"18\") {\n    line_name = 'Cam housing Assy'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"18A\") {\n    line_name = 'Cam housing Assy C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"18B\") {\n    line_name = 'Cam housing Assy C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"19\") {\n    line_name = 'Cam Cap 1A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"20\") {\n    line_name = 'Cam Cap 1B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"21\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"21A\") {\n    line_name = 'Cam Cap 1C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"21B\") {\n    line_name = 'Cam Cap 1C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"22\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"22A\") {\n    line_name = 'Cam Cap 2 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"22B\") {\n    line_name = 'Cam Cap 2 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"22C\") {\n    line_name = 'Cam Cap 2 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"22D\") {\n    line_name = 'Cam Cap 2 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"23\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"23A\") {\n    line_name = 'Cam Cap 3 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"23B\") {\n    line_name = 'Cam Cap 3 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"23C\") {\n    line_name = 'Cam Cap 3 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"23D\") {\n    line_name = 'Cam Cap 3 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"24\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"24A\") {\n    line_name = 'Cam Cap 4 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"24B\") {\n    line_name = 'Cam Cap 4 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"24C\") {\n    line_name = 'Cam Cap 4 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"24D\") {\n    line_name = 'Cam Cap 4 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"25\") {\n    line_name = 'Cam Cap 2 & 3 D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"26\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id === \"26A\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id === \"27\") {\n    line_name = 'Connector'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"27A\") {\n    line_name = 'Spacer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"27B\") {\n    line_name = 'Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"27C\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"28\") {\n    line_name = 'Housing'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"28A\") {\n    line_name = 'Housing Inlet TR '\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"28B\") {\n    line_name = 'Housing Inlet D13E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\n\nelse if (line_id === \"29\") {\n    line_name = 'Balance Shaft NO 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"29A\") {\n    line_name = 'Balance Shaft NO 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"30\") {\n    line_name = 'Roller Arm 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"30A\") {\n    line_name = 'Roller Arm 1 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"30B\") {\n    line_name = 'Roller Arm 1 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"30C\") {\n    line_name = 'Roller Arm 1 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"30D\") {\n    line_name = 'Roller Arm 1 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"30E\") {\n    line_name = 'Roller Arm 1 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id === \"31\") {\n    line_name = 'Roller Arm 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"31A\") {\n    line_name = 'Roller Arm 2 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"31B\") {\n    line_name = 'Roller Arm 2 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"31C\") {\n    line_name = 'Roller Arm 2 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"31D\") {\n    line_name = 'Roller Arm 2 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"31E\") {\n    line_name = 'Roller Arm 2 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"32\") {\n    line_name = 'Hydraulic Lash Adjuster'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"32A\") {\n    line_name = 'Hydraulic Lash Adjuster A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"32B\") {\n    line_name = 'Hydraulic Lash Adjuster B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"32C\") {\n    line_name = 'Hydraulic Lash Adjuster C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"32D\") {\n    line_name = 'Hydraulic Lash Adjuster D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"32E\") {\n    line_name = 'Hydraulic Lash Adjuster E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id === \"33\") {\n    line_name = 'Housing Inlet Water'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34\") {\n    line_name = 'Packing IMV'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34A\") {\n    line_name = 'Packing IMV 1'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34B\") {\n    line_name = 'Packing IMV 2'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34C\") {\n    line_name = 'Packing IMV 3'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34D\") {\n    line_name = 'Packing IMV 4'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34E\") {\n    line_name = 'Packing IMV 5'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34F\") {\n    line_name = 'Packing IMV 6'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34G\") {\n    line_name = 'Packing IMV 7'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34H\") {\n    line_name = 'Packing IMV 8'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34I\") {\n    line_name = 'Packing IMV 9'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34J\") {\n    line_name = 'Packing IMV 10'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34K\") {\n    line_name = 'Packing IMV 11'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34L\") {\n    line_name = 'Packing IMV 12'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34M\") {\n    line_name = 'Packing IMV 13'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34N\") {\n    line_name = 'Packing IMV 14'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34O\") {\n    line_name = 'Packing IMV 15'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34P\") {\n    line_name = 'Packing IMV 16'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34Q\") {\n    line_name = 'Packing IMV 17'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"34R\") {\n    line_name = 'Packing IMV 18'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id === \"35\") {\n    line_name = 'Packing Common Rail'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1270,
        "y": 40,
        "wires": [
            [
                "b92282746d952558"
            ]
        ]
    },
    {
        "id": "b92282746d952558",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "993a985e41a9c182",
        "name": "",
        "x": 1480,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "e8dc82a6afe2ccfe",
        "type": "string",
        "z": "427da6dc73857e3a",
        "name": "",
        "methods": [
            {
                "name": "split",
                "params": [
                    {
                        "type": "str",
                        "value": ","
                    },
                    {
                        "type": "num",
                        "value": "50"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 1090,
        "y": 40,
        "wires": [
            [
                "a0932c442fa5eb26"
            ]
        ]
    },
    {
        "id": "03bb82462e0b2f86",
        "type": "mysql",
        "z": "427da6dc73857e3a",
        "mydb": "7586feceaa5f6bdf",
        "name": "",
        "x": 1480,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "7b7ecb1abede9804",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "query_sql_himos",
        "func": "var name_hikitori = msg.payload[0];\nvar actual_pouling = msg.payload[1];\nvar loading_time = msg.payload[2];\nvar status = msg.payload[3];\nvar cycle_normal = msg.payload[4];\nvar andon = msg.payload[5];\n\nvar validHikitoriIds = [\"HIKITORI A\", \"HIKITORI B\", \"HIKITORI C\", \"HIKITORI D\", \"HIKITORI E\", \"HIKITORI F\", \"HIKITORI G\", \"HIKITORI H\"];\n\nif (validHikitoriIds.includes(name_hikitori)) {\n    msg.topic = `INSERT INTO table_all_himos (id, name_hikitori, actual_pouling, loading_time, status, cycle_normal\t, andon) values(null, '${name_hikitori}', '${actual_pouling}', '${loading_time}', '${status}', '${cycle_normal\t}', '${andon}');`;\n} else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1270,
        "y": 80,
        "wires": [
            [
                "03bb82462e0b2f86"
            ]
        ]
    },
    {
        "id": "74e52296bda0e8d3",
        "type": "string",
        "z": "427da6dc73857e3a",
        "name": "",
        "methods": [
            {
                "name": "split",
                "params": [
                    {
                        "type": "str",
                        "value": "^"
                    },
                    {
                        "type": "num",
                        "value": "50"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 1090,
        "y": 80,
        "wires": [
            [
                "7b7ecb1abede9804"
            ]
        ]
    },
    {
        "id": "3e569cdfaf452726",
        "type": "ui_text",
        "z": "427da6dc73857e3a",
        "group": "40380b5d11a03403",
        "order": 1,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Konsumsi Energy Saat Ini",
        "format": "{{msg.payload}} kW",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1230,
        "y": 980,
        "wires": []
    },
    {
        "id": "2341e37714485732",
        "type": "string",
        "z": "427da6dc73857e3a",
        "name": "filter_kubikal",
        "methods": [
            {
                "name": "between",
                "params": [
                    {
                        "type": "str",
                        "value": "*"
                    },
                    {
                        "type": "str",
                        "value": "#"
                    }
                ]
            },
            {
                "name": "split",
                "params": [
                    {
                        "type": "str",
                        "value": ","
                    },
                    {
                        "type": "num",
                        "value": "50"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 370,
        "y": 960,
        "wires": [
            [
                "c289e908b8a6d109"
            ]
        ]
    },
    {
        "id": "043e765b181003fe",
        "type": "debug",
        "z": "427da6dc73857e3a",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 900,
        "wires": []
    },
    {
        "id": "c289e908b8a6d109",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "filter_kub",
        "func": "// PM_KUBIKAL\nvar data_core = msg.payload[0]\n\n\nif (data_core === \"kub\"){\n    return msg;\n}\nelse{\n    return null;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 520,
        "y": 960,
        "wires": [
            [
                "c3231627f34840b5",
                "043e765b181003fe",
                "e17ae73ac2bda443",
                "9108c280fab87d0f",
                "7b67013c08809828",
                "e98ced26bf0f4b0f",
                "fe721dd046716add",
                "0d72bd421617bb3c",
                "5dcdd8516201577f",
                "52c2257456a16fd1",
                "838c557b1cc8e7a9",
                "3725ce24c4e0256e",
                "9b0698ab99c6df34",
                "8f27395a2523a251"
            ]
        ]
    },
    {
        "id": "6e35572ba1aabfc4",
        "type": "debug",
        "z": "427da6dc73857e3a",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1320,
        "y": 900,
        "wires": []
    },
    {
        "id": "9108c280fab87d0f",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Active Power Total",
        "func": "\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\nif (data_filter === \"DA_30\") {\n    msg.payload = parseFloat(data_core).toFixed(2);\n    msg.topic = \"Power Now\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 710,
        "y": 1040,
        "wires": [
            [
                "3e569cdfaf452726",
                "9bc9616a9601fee5",
                "074dd5a770277b99"
            ]
        ]
    },
    {
        "id": "52b8791c5d4408d7",
        "type": "ui_text",
        "z": "427da6dc73857e3a",
        "group": "ac32321bf02cfb27",
        "order": 1,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "kWh",
        "format": "{{msg.payload}} kWh",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1170,
        "y": 940,
        "wires": []
    },
    {
        "id": "e17ae73ac2bda443",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Active Energy Delivered (Into Load)",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_01\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = data_core // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 760,
        "y": 1000,
        "wires": [
            [
                "52b8791c5d4408d7"
            ]
        ]
    },
    {
        "id": "50ecb53ea7f5296c",
        "type": "ui_text",
        "z": "427da6dc73857e3a",
        "group": "6e5e8d67d38ae7d0",
        "order": 1,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Voltage L-L Avg",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1020,
        "y": 1220,
        "wires": []
    },
    {
        "id": "7b67013c08809828",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Voltage A-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_23\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "e98ced26bf0f4b0f",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Voltage B-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_24\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "fe721dd046716add",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Voltage C-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_25\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "0d72bd421617bb3c",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Voltage L-L Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_22'\nif (data_filter === \"DA_22\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 800,
        "y": 1220,
        "wires": [
            [
                "50ecb53ea7f5296c"
            ]
        ]
    },
    {
        "id": "885fe852068eee87",
        "type": "ui_text",
        "z": "427da6dc73857e3a",
        "group": "d333fc4687abcf19",
        "order": 1,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Current Avg",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1010,
        "y": 1560,
        "wires": []
    },
    {
        "id": "5dcdd8516201577f",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Currnet A",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_13\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "8f27395a2523a251",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Voltage L-N Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_18\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 800,
        "y": 1560,
        "wires": [
            [
                "885fe852068eee87"
            ]
        ]
    },
    {
        "id": "52c2257456a16fd1",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Currnet B",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_14\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "838c557b1cc8e7a9",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Currnet C",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_15\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 1380,
        "wires": [
            []
        ]
    },
    {
        "id": "3725ce24c4e0256e",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Currnet N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_16\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "9b0698ab99c6df34",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Currnet G",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_17\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "9bc9616a9601fee5",
        "type": "function",
        "z": "427da6dc73857e3a",
        "name": "Kontrak Daya",
        "func": "msg.payload =2400;\nmsg.topic = \"Kontrak Daya\";\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1000,
        "y": 1060,
        "wires": [
            [
                "074dd5a770277b99"
            ]
        ]
    },
    {
        "id": "074dd5a770277b99",
        "type": "ui_chart",
        "z": "427da6dc73857e3a",
        "name": "",
        "group": "dddfd0b4959fdb61",
        "order": 1,
        "width": 12,
        "height": 8,
        "label": "Power Realtime (kW)",
        "chartType": "line",
        "legend": "true",
        "xformat": "auto",
        "interpolate": "bezier",
        "nodata": "",
        "dot": true,
        "ymin": "0",
        "ymax": "2600",
        "removeOlder": "1",
        "removeOlderPoints": "100",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#b31e1e",
            "#2d1fea",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 1260,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "c71a6b8879d1e5c0",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_ab",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "bebd24bb4fd34e2f",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_cd",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "3dd901a47a1781df",
        "type": "serial-port",
        "name": "",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "60000"
    },
    {
        "id": "de33f8dbe22463fe",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "database_tps_energy",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "257c55675ac7787d",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_ef",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "42a2103475722fa2",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_saa",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "43a8f81ce7e2d29c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_sab",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "456d059a55d7408f",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_cam_cap_234",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "6c729da0af6f0887",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_camphousing_sac",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9303153eac5cda13",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_ret",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b2fb125af19ea97c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_listrik_kubikal",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "993a985e41a9c182",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "database_tps_montiv",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "7586feceaa5f6bdf",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "database_tps_himos",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "40380b5d11a03403",
        "type": "ui_group",
        "name": "Konsumsi Energy Realtime",
        "tab": "7e6ad0ef86d5202f",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "ac32321bf02cfb27",
        "type": "ui_group",
        "name": "Total Akhir kWh",
        "tab": "7e6ad0ef86d5202f",
        "order": 1,
        "disp": true,
        "width": 6,
        "collapse": false,
        "className": ""
    },
    {
        "id": "6e5e8d67d38ae7d0",
        "type": "ui_group",
        "name": "Tegangan (Volt)",
        "tab": "7e6ad0ef86d5202f",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "d333fc4687abcf19",
        "type": "ui_group",
        "name": "Arus (A)",
        "tab": "7e6ad0ef86d5202f",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "dddfd0b4959fdb61",
        "type": "ui_group",
        "name": "Power(Watt)",
        "tab": "7e6ad0ef86d5202f",
        "order": 5,
        "disp": true,
        "width": 12,
        "collapse": false,
        "className": ""
    },
    {
        "id": "7e6ad0ef86d5202f",
        "type": "ui_tab",
        "name": "PT. OTICS Indonesia Monitoring Energy Realtime Plant 1",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    }
]