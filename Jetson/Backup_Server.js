[
    {
        "id": "360fef0c89fe1def",
        "type": "inject",
        "z": "7c7044f25de04ebc",
        "name": "Data In",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 110,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "9245d6772084e8de",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 400,
        "y": 60,
        "wires": []
    },
    {
        "id": "735a9fd53a8540f4",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Roller Arm ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"roller_arm\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 330,
        "wires": [
            [
                "ecac310e772a2fc9"
            ]
        ]
    },
    {
        "id": "4785a76e58d6bd62",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Roller Arm ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"roller_arm\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 370,
        "wires": [
            [
                "ecac310e772a2fc9"
            ]
        ]
    },
    {
        "id": "be102477f9662734",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR2 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_2\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 410,
        "wires": [
            [
                "1e0ecccbada3e63a"
            ]
        ]
    },
    {
        "id": "09a96834f6e17b3c",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR2 ALL PM 220",
        "func": "\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_2\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 450,
        "wires": [
            [
                "1e0ecccbada3e63a"
            ]
        ]
    },
    {
        "id": "9655ce5e5122c413",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR1 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_1\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 330,
        "wires": [
            [
                "cc6ff2e555c05cb7"
            ]
        ]
    },
    {
        "id": "a412d8d823821528",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR1 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_1\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 370,
        "wires": [
            [
                "cc6ff2e555c05cb7"
            ]
        ]
    },
    {
        "id": "693532e6b81e2101",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR3 ALL PM 200",
        "func": "\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_3\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 490,
        "wires": [
            [
                "da03a1dd261f4e0d"
            ]
        ]
    },
    {
        "id": "51e45703de3da724",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR3 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_3\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 530,
        "wires": [
            [
                "da03a1dd261f4e0d"
            ]
        ]
    },
    {
        "id": "e8ee6968b7ff67f2",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR4 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_4\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 610,
        "wires": [
            [
                "1c5d8bdac08f2d4d"
            ]
        ]
    },
    {
        "id": "d267dd73e07571cf",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR4 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_4\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 570,
        "wires": [
            [
                "1c5d8bdac08f2d4d"
            ]
        ]
    },
    {
        "id": "0b998d13e21bf3f5",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR5 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_5\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 690,
        "wires": [
            [
                "89addbe9b96191c0"
            ]
        ]
    },
    {
        "id": "2f802b85ce533518",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR5 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_5\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 650,
        "wires": [
            [
                "89addbe9b96191c0"
            ]
        ]
    },
    {
        "id": "34d43947ca3b8687",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR6 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_6\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 770,
        "wires": [
            [
                "0a5e40d0a7d4f441"
            ]
        ]
    },
    {
        "id": "94cd4feecdbb8659",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR6 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_6\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 730,
        "wires": [
            [
                "0a5e40d0a7d4f441"
            ]
        ]
    },
    {
        "id": "1dfa5fe34d46ade8",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR7 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_7\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 810,
        "wires": [
            [
                "d43ef090ebc82259"
            ]
        ]
    },
    {
        "id": "a76537de4ea8b097",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR7 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_7\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 850,
        "wires": [
            [
                "d43ef090ebc82259"
            ]
        ]
    },
    {
        "id": "82d2439b334e9fc4",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR8 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_8\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 930,
        "wires": [
            [
                "a7d1fa698e42e4bb"
            ]
        ]
    },
    {
        "id": "5939c82df478e80b",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR8 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_8\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 890,
        "wires": [
            [
                "a7d1fa698e42e4bb"
            ]
        ]
    },
    {
        "id": "475e9bc21fbb229e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR9 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_9\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 970,
        "wires": [
            [
                "59edd374aa4502c8"
            ]
        ]
    },
    {
        "id": "d85842066315a3a2",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR9 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_9\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1010,
        "wires": [
            [
                "59edd374aa4502c8"
            ]
        ]
    },
    {
        "id": "7d823bf8e0e1ecdc",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR10 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_10\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1090,
        "wires": [
            [
                "8333792bf0db2d76"
            ]
        ]
    },
    {
        "id": "e451e89380a15791",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR10 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_10\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1050,
        "wires": [
            [
                "8333792bf0db2d76"
            ]
        ]
    },
    {
        "id": "7565ea9e13ce300e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR11 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_11\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1170,
        "wires": [
            [
                "181878ca0912d5e0"
            ]
        ]
    },
    {
        "id": "9a18a5b8d775d544",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR11 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_11\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1130,
        "wires": [
            [
                "181878ca0912d5e0"
            ]
        ]
    },
    {
        "id": "304e2678cf331b82",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR12 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_12\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1210,
        "wires": [
            [
                "c6bb84bc536a75f0"
            ]
        ]
    },
    {
        "id": "2d9fb87731fc8fae",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "CR12 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_12\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1250,
        "wires": [
            [
                "c6bb84bc536a75f0"
            ]
        ]
    },
    {
        "id": "5c4539fbf7426322",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing AB PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH\" && power_meter === \"PM-200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 670,
        "wires": [
            [
                "33ba72fd61bbf46a"
            ]
        ]
    },
    {
        "id": "bf037aeee5194e45",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing AB PM220V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH\" && power_meter === \"PM-220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 630,
        "wires": [
            [
                "33ba72fd61bbf46a"
            ]
        ]
    },
    {
        "id": "cba59091eb9a09fc",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing CD PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH-CD\" && power_meter === \"PM-3F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 750,
        "wires": [
            [
                "7ca24ec25cb68289"
            ]
        ]
    },
    {
        "id": "9901d7dd007b5077",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing CD PM220V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH-CD\" && power_meter === \"PM-1F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 710,
        "wires": [
            [
                "7ca24ec25cb68289"
            ]
        ]
    },
    {
        "id": "29a8a0f404fa677a",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "retainer_pm200",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"RET\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1400,
        "y": 1140,
        "wires": [
            [
                "54d143f9e7020030"
            ]
        ]
    },
    {
        "id": "41c0ab50269a0669",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "retainer_pm220",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"RET\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1400,
        "y": 1100,
        "wires": [
            [
                "54d143f9e7020030"
            ]
        ]
    },
    {
        "id": "6d3a8aa7a563ab6f",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Balance Shaft 1 PM200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_1\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 450,
        "wires": [
            [
                "3b538dae08616a0f"
            ]
        ]
    },
    {
        "id": "4abc4f185c3088bf",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Balance Shaft 1 PM220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_1\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 410,
        "wires": [
            [
                "3b538dae08616a0f"
            ]
        ]
    },
    {
        "id": "62beb164a3eac4e6",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Balance Shaft 2 PM200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_2\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 530,
        "wires": [
            [
                "b16014758f30ced2"
            ]
        ]
    },
    {
        "id": "a1301d6efdadc5ac",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Balance Shaft 2 PM220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_2\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 490,
        "wires": [
            [
                "b16014758f30ced2"
            ]
        ]
    },
    {
        "id": "bc4975f18a98bf93",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing EF PM220V",
        "func": "\n\n\nvar panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_EF\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 970,
        "wires": [
            [
                "5019ff3899a34042"
            ]
        ]
    },
    {
        "id": "8381ff3b1ba8375e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing EF PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_EF\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 1010,
        "wires": [
            [
                "5019ff3899a34042"
            ]
        ]
    },
    {
        "id": "700e31be059afc29",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing SAC PM220V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_SAC\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 890,
        "wires": [
            [
                "b371c6826c4161b1"
            ]
        ]
    },
    {
        "id": "8a4159d38a35697d",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Camp Housing SAC PM200V",
        "func": "\nvar panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_SAC\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 930,
        "wires": [
            [
                "b371c6826c4161b1"
            ]
        ]
    },
    {
        "id": "b5bba3158dec1939",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 790,
        "y": 260,
        "wires": []
    },
    {
        "id": "3a7120e1dd0230ef",
        "type": "string",
        "z": "7c7044f25de04ebc",
        "name": "filter_energy_line_all",
        "methods": [
            {
                "name": "strip",
                "params": [
                    {
                        "type": "str",
                        "value": "\\n"
                    }
                ]
            },
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
        "x": 550,
        "y": 260,
        "wires": [
            [
                "735a9fd53a8540f4",
                "4785a76e58d6bd62",
                "be102477f9662734",
                "09a96834f6e17b3c",
                "9655ce5e5122c413",
                "a412d8d823821528",
                "693532e6b81e2101",
                "51e45703de3da724",
                "e8ee6968b7ff67f2",
                "d267dd73e07571cf",
                "0b998d13e21bf3f5",
                "2f802b85ce533518",
                "34d43947ca3b8687",
                "94cd4feecdbb8659",
                "1dfa5fe34d46ade8",
                "a76537de4ea8b097",
                "82d2439b334e9fc4",
                "5939c82df478e80b",
                "475e9bc21fbb229e",
                "d85842066315a3a2",
                "7d823bf8e0e1ecdc",
                "e451e89380a15791",
                "7565ea9e13ce300e",
                "9a18a5b8d775d544",
                "304e2678cf331b82",
                "2d9fb87731fc8fae",
                "5c4539fbf7426322",
                "bf037aeee5194e45",
                "cba59091eb9a09fc",
                "9901d7dd007b5077",
                "29a8a0f404fa677a",
                "41c0ab50269a0669",
                "6d3a8aa7a563ab6f",
                "4abc4f185c3088bf",
                "62beb164a3eac4e6",
                "a1301d6efdadc5ac",
                "bc4975f18a98bf93",
                "8381ff3b1ba8375e",
                "700e31be059afc29",
                "8a4159d38a35697d",
                "b5bba3158dec1939",
                "e8aaef6329b3e684",
                "ce03e39218fb28e7",
                "7e79e22c4ff8e1e1"
            ]
        ]
    },
    {
        "id": "ecac310e772a2fc9",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "e01464c7338ba5fd",
        "name": "",
        "x": 1700,
        "y": 330,
        "wires": [
            [
                "ef1f66bd03fcbc39"
            ]
        ]
    },
    {
        "id": "cc6ff2e555c05cb7",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9872beaf9e3e7375",
        "name": "",
        "x": 1060,
        "y": 330,
        "wires": [
            [
                "1c97f8ae9f01a722"
            ]
        ]
    },
    {
        "id": "1e0ecccbada3e63a",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "6390bffd50e96f74",
        "name": "",
        "x": 1060,
        "y": 410,
        "wires": [
            [
                "4c715454738cb35b"
            ]
        ]
    },
    {
        "id": "da03a1dd261f4e0d",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9babe1a5a78be47b",
        "name": "",
        "x": 1060,
        "y": 490,
        "wires": [
            [
                "4966026339679698"
            ]
        ]
    },
    {
        "id": "1c5d8bdac08f2d4d",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b2517ce0d5b5a5ba",
        "name": "",
        "x": 1060,
        "y": 570,
        "wires": [
            [
                "4d596369cfdff9c9"
            ]
        ]
    },
    {
        "id": "89addbe9b96191c0",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "ccda5500b91adc61",
        "name": "",
        "x": 1060,
        "y": 650,
        "wires": [
            [
                "be2a8cc40157bd67"
            ]
        ]
    },
    {
        "id": "0a5e40d0a7d4f441",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b75835443c80b493",
        "name": "",
        "x": 1060,
        "y": 730,
        "wires": [
            [
                "21ac621466032a2b"
            ]
        ]
    },
    {
        "id": "d43ef090ebc82259",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "87c592895c269819",
        "name": "",
        "x": 1060,
        "y": 810,
        "wires": [
            [
                "d8a9c5b6f2f80f14"
            ]
        ]
    },
    {
        "id": "8333792bf0db2d76",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "fa0e8c92b974c58c",
        "name": "",
        "x": 1070,
        "y": 1050,
        "wires": [
            [
                "5379801ee2973417"
            ]
        ]
    },
    {
        "id": "a7d1fa698e42e4bb",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b13b8c8bbd996378",
        "name": "",
        "x": 1060,
        "y": 890,
        "wires": [
            [
                "ece98a2e41f03d93"
            ]
        ]
    },
    {
        "id": "59edd374aa4502c8",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9d668a044cc26ee0",
        "name": "",
        "x": 1060,
        "y": 970,
        "wires": [
            [
                "b98408dcfeb5001f"
            ]
        ]
    },
    {
        "id": "181878ca0912d5e0",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "cbfb3d39a29be0a1",
        "name": "",
        "x": 1070,
        "y": 1130,
        "wires": [
            [
                "f6d8de6d91664fb7"
            ]
        ]
    },
    {
        "id": "c6bb84bc536a75f0",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "62723a09dfa2ded4",
        "name": "",
        "x": 1070,
        "y": 1190,
        "wires": [
            [
                "b9932cc491873ea9"
            ]
        ]
    },
    {
        "id": "3b538dae08616a0f",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "0cd6b0e2d16c9d85",
        "name": "",
        "x": 1720,
        "y": 410,
        "wires": [
            [
                "d00b8e8caa0cb379"
            ]
        ]
    },
    {
        "id": "b16014758f30ced2",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "61f0b1155bd5122a",
        "name": "",
        "x": 1720,
        "y": 490,
        "wires": [
            [
                "a778fbdd4a712e5b"
            ]
        ]
    },
    {
        "id": "33ba72fd61bbf46a",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "4c4ebdfc64378e5e",
        "name": "",
        "x": 1720,
        "y": 630,
        "wires": [
            [
                "53d7eb554e325e8f"
            ]
        ]
    },
    {
        "id": "7ca24ec25cb68289",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9c1c867e7a8d014c",
        "name": "",
        "x": 1720,
        "y": 710,
        "wires": [
            [
                "9f40abc636a71473"
            ]
        ]
    },
    {
        "id": "54d143f9e7020030",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "4567d7d49e5fe3d4",
        "name": "",
        "x": 1690,
        "y": 1100,
        "wires": [
            [
                "53596f6830426f06"
            ]
        ]
    },
    {
        "id": "5019ff3899a34042",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "a0e98ab7ca79aaed",
        "name": "",
        "x": 1720,
        "y": 970,
        "wires": [
            [
                "f5dea8a598cc0834"
            ]
        ]
    },
    {
        "id": "b371c6826c4161b1",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "bcab9e07f2e900d3",
        "name": "",
        "x": 1720,
        "y": 890,
        "wires": [
            [
                "da369801f1320b01"
            ]
        ]
    },
    {
        "id": "b783383e7294ab06",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "debug 2",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 220,
        "wires": []
    },
    {
        "id": "b13977092e127616",
        "type": "string",
        "z": "7c7044f25de04ebc",
        "name": "montiv",
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
                        "value": "40"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 500,
        "y": 220,
        "wires": [
            [
                "b783383e7294ab06"
            ]
        ]
    },
    {
        "id": "31f12613876546c1",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "query_sql_montiv",
        "func": "var line_id\nvar name_product\nvar target\nvar actual\nvar loading_time\nvar efficiency\nvar delay\nvar cycle_time\nvar status_montiv\nvar loading_time\nvar status_hikitori\nvar time_trouble\nvar time_trouble_quality\nvar andon\nvar line_name\nvar pg\n\nline_id = msg.payload[0]\nname_product = msg.payload[1]\ntarget = msg.payload[2]\nactual = msg.payload[3]\nloading_time = msg.payload[4]\nefficiency = msg.payload[5]\ndelay = msg.payload[6]\ncycle_time = msg.payload[7]\nstatus_montiv = msg.payload[8]\ntime_trouble = msg.payload[9]\ntime_trouble_quality = msg.payload[10]\nandon = msg.payload[11]\n\nif (line_id == \"1\") {\n    line_name = 'Common Rail 1'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"2\") {\n    line_name = 'Common Rail 2'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"3\") {\n    line_name = 'Common Rail 3'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"4\") {\n    line_name = 'Common Rail 4'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"5\") {\n\n    line_name = 'Common Rail 5'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"6\") {\n    line_name = 'Common Rail 6'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"7\") {\n    line_name = 'Common Rail 7'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"8\") {\n    line_name = 'Common Rail 8'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"9\") {\n    line_name = 'Common Rail 9'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"10\") {\n    line_name = 'Common Rail 10'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"11\") {\n    line_name = 'Common Rail 11'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"12\") {\n    line_name = 'Common Rail 12'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"13\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg; \n}    \nelse if (line_id == \"13A\") {\n    line_name = 'Cam housing A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id == \"13B\") {\n    line_name = 'Cam housing B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id == \"14\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values (null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"14A\") {\n    line_name = 'Cam housing C'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"14B\") {\n    line_name = 'Cam housing D'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"15\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n   return msg;\n}\nelse if (line_id == \"15A\") {\n    line_name = 'Cam housing E NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"15B\") {\n    line_name = 'Cam housing E D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"16\") {\n    line_name = 'Cam housing Assy A'\n    pg = 'PG2.3'\n}\n\nelse if (line_id == \"17\") {\n    line_name = 'Cam housing Assy B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"18\") {\n    line_name = 'Cam housing Assy'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"18A\") {\n    line_name = 'Cam housing Assy C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"18B\") {\n    line_name = 'Cam housing Assy C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"19\") {\n    line_name = 'Cam Cap 1A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"20\") {\n    line_name = 'Cam Cap 1B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"21\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"21A\") {\n    line_name = 'Cam Cap 1C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"21B\") {\n    line_name = 'Cam Cap 1C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"22\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22A\") {\n    line_name = 'Cam Cap 2 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22B\") {\n    line_name = 'Cam Cap 2 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22C\") {\n    line_name = 'Cam Cap 2 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22D\") {\n    line_name = 'Cam Cap 2 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"23\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23A\") {\n    line_name = 'Cam Cap 3 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23B\") {\n    line_name = 'Cam Cap 3 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23C\") {\n    line_name = 'Cam Cap 3 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23D\") {\n    line_name = 'Cam Cap 3 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"24\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24A\") {\n    line_name = 'Cam Cap 4 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24B\") {\n    line_name = 'Cam Cap 4 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24C\") {\n    line_name = 'Cam Cap 4 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24D\") {\n    line_name = 'Cam Cap 4 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"25\") {\n    line_name = 'Cam Cap 2 & 3 D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\n\n\n\n\nelse if (line_id == \"26\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id == \"26A\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id == \"27\") {\n    line_name = 'Connector'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27A\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27B\") {\n    line_name = 'Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27C\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"28\") {\n    line_name = 'Housing'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"28A\") {\n    line_name = 'Housing Inlet TR '\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"28B\") {\n    line_name = 'Housing Inlet D13E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\n\nelse if (line_id == \"29\") {\n    line_name = 'Balance Shaft NO 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"29A\") {\n    line_name = 'Balance Shaft NO 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"30\") {\n    line_name = 'Roller Arm 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30A\") {\n    line_name = 'Roller Arm 1 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30B\") {\n    line_name = 'Roller Arm 1 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30C\") {\n    line_name = 'Roller Arm 1 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30D\") {\n    line_name = 'Roller Arm 1 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30E\") {\n    line_name = 'Roller Arm 1 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"31\") {\n    line_name = 'Roller Arm 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31A\") {\n    line_name = 'Roller Arm 2 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31B\") {\n    line_name = 'Roller Arm 2 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31C\") {\n    line_name = 'Roller Arm 2 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31D\") {\n    line_name = 'Roller Arm 2 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31E\") {\n    line_name = 'Roller Arm 2 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32\") {\n    line_name = 'Hydraulic Lash Adjuster'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"32A\") {\n    line_name = 'Hydraulic Lash Adjuster A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32B\") {\n    line_name = 'Hydraulic Lash Adjuster B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32C\") {\n    line_name = 'Hydraulic Lash Adjuster C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32D\") {\n    line_name = 'Hydraulic Lash Adjuster D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32E\") {\n    line_name = 'Hydraulic Lash Adjuster E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"33\") {\n    line_name = 'Housing Inlet Water'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34\") {\n    line_name = 'Packing IMV'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34A\") {\n    line_name = 'Packing IMV 1'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34B\") {\n    line_name = 'Packing IMV 2'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34C\") {\n    line_name = 'Packing IMV 3'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34D\") {\n    line_name = 'Packing IMV 4'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34E\") {\n    line_name = 'Packing IMV 5'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34F\") {\n    line_name = 'Packing IMV 6'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34G\") {\n    line_name = 'Packing IMV 7'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34H\") {\n    line_name = 'Packing IMV 8'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34I\") {\n    line_name = 'Packing IMV 9'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34J\") {\n    line_name = 'Packing IMV 10'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34K\") {\n    line_name = 'Packing IMV 11'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34L\") {\n    line_name = 'Packing IMV 12'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34M\") {\n    line_name = 'Packing IMV 13'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34N\") {\n    line_name = 'Packing IMV 14'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34O\") {\n    line_name = 'Packing IMV 15'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34P\") {\n    line_name = 'Packing IMV 16'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34Q\") {\n    line_name = 'Packing IMV 17'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34R\") {\n    line_name = 'Packing IMV 18'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"35\") {\n    line_name = 'Packing Common Rail'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 100,
        "wires": [
            [
                "b9b00459c120240c"
            ]
        ]
    },
    {
        "id": "b9b00459c120240c",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "ae4131ddb4c0b286",
        "name": "",
        "x": 880,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "81f00ca945956efc",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b749c750c5583ae4",
        "name": "",
        "x": 880,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "e73277314bad1e3a",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "query_sql_himos",
        "func": "var name_hikitori = msg.payload[0];\nvar actual_pouling = msg.payload[1];\nvar loading_time = msg.payload[2];\nvar status = msg.payload[3];\nvar cycle_normal = msg.payload[4];\nvar andon = msg.payload[5];\n\nvar validHikitoriIds = [\"HIKITORI A\", \"HIKITORI B\", \"HIKITORI C\", \"HIKITORI D\", \"HIKITORI E\", \"HIKITORI F\", \"HIKITORI G\", \"HIKITORI H\"];\n\nif (validHikitoriIds.includes(name_hikitori)) {\n    msg.topic = `INSERT INTO table_all_himos (id, name_hikitori, actual_pouling, loading_time, status, cycle_normal\t, andon) values(null, '${name_hikitori}', '${actual_pouling}', '${loading_time}', '${status}', '${cycle_normal\t}', '${andon}');`;\n} else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 180,
        "wires": [
            [
                "81f00ca945956efc"
            ]
        ]
    },
    {
        "id": "05283690c0bd328a",
        "type": "string",
        "z": "7c7044f25de04ebc",
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
        "x": 500,
        "y": 180,
        "wires": [
            [
                "e73277314bad1e3a"
            ]
        ]
    },
    {
        "id": "8004cd08016f7cbc",
        "type": "string",
        "z": "7c7044f25de04ebc",
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
        "x": 500,
        "y": 140,
        "wires": [
            [
                "31f12613876546c1"
            ]
        ]
    },
    {
        "id": "4e829589c8ef261d",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "Serial_COM_After",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 4010,
        "y": 180,
        "wires": []
    },
    {
        "id": "44f6b23c7a4e97be",
        "type": "string",
        "z": "7c7044f25de04ebc",
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
        "x": 3850,
        "y": 180,
        "wires": [
            [
                "4e829589c8ef261d"
            ]
        ]
    },
    {
        "id": "83b2d74c1dd66e01",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "Serial_COM",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 3870,
        "y": 140,
        "wires": []
    },
    {
        "id": "b3b8df4ca52f83da",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "KUBIKAL==>(watt_hour)",
        "func": "// PM_KUBIKAL\nvar data_code = msg.payload[1]\nvar value_code = msg.payload[2]\n\n\n\nif (data_code === \"DA_01\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Into_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_02\") {\n    msg.topic = \"INSERT INTO Active_Energy_Received_Out_of_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_03\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_04\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_05\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_06\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_07\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_08\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_09\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_10\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_11\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_12\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_13\") {\n    msg.topic = \"INSERT INTO Current_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_14\") {\n    msg.topic = \"INSERT INTO Current_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_15\") {\n    msg.topic = \"INSERT INTO Current_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_16\") {\n    msg.topic = \"INSERT INTO Current_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_17\") {\n    msg.topic = \"INSERT INTO Current_G (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_18\") {\n    msg.topic = \"INSERT INTO Current_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_19\") {\n    msg.topic = \"INSERT INTO Voltage_A_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_20\") {\n    msg.topic = \"INSERT INTO Voltage_B_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_21\") {\n    msg.topic = \"INSERT INTO Voltage_C_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_22\") {\n    msg.topic = \"INSERT INTO Voltage_L_L_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_23\") {\n    msg.topic = \"INSERT INTO Voltage_A_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_24\") {\n    msg.topic = \"INSERT INTO Voltage_B_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_25\") {\n    msg.topic = \"INSERT INTO Voltage_C_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_26\") {\n    msg.topic = \"INSERT INTO Voltage_L_N_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_27\") {\n    msg.topic = \"INSERT INTO Active_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_28\") {\n    msg.topic = \"INSERT INTO Active_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_29\") {\n    msg.topic = \"INSERT INTO Active_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_30\") {\n    msg.topic = \"INSERT INTO Active_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_31\") {\n    msg.topic = \"INSERT INTO Reactive_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_32\") {\n    msg.topic = \"INSERT INTO Reactive_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_33\") {\n    msg.topic = \"INSERT INTO Reactive_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_34\") {\n    msg.topic = \"INSERT INTO Reactive_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_35\") {\n    msg.topic = \"INSERT INTO Apparent_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_36\") {\n    msg.topic = \"INSERT INTO Apparent_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_37\") {\n    msg.topic = \"INSERT INTO Apparent_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_38\") {\n    msg.topic = \"INSERT INTO Apparent_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_39\") {\n    msg.topic = \"INSERT INTO Power_Factor_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_40\") {\n    msg.topic = \"INSERT INTO Power_Factor_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_41\") {\n    msg.topic = \"INSERT INTO Power_Factor_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_42\") {\n    msg.topic = \"INSERT INTO Power_Factor_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_43\") {\n    msg.topic = \"INSERT INTO Frequency (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_44\") {\n    msg.topic = \"INSERT INTO Year (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_45\") {\n    msg.topic = \"INSERT INTO Month (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_46\") {\n    msg.topic = \"INSERT INTO Day (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_47\") {\n    msg.topic = \"INSERT INTO Hour (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_48\") {\n    msg.topic = \"INSERT INTO Minute (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_49\") {\n    msg.topic = \"INSERT INTO Second (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4070,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "74c3585dbf08e2a3",
        "type": "string",
        "z": "7c7044f25de04ebc",
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
        "x": 3870,
        "y": 220,
        "wires": [
            [
                "52a9babb09ea5e48"
            ]
        ]
    },
    {
        "id": "a0fadd3690ea0b83",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 4280,
        "y": 300,
        "wires": []
    },
    {
        "id": "52a9babb09ea5e48",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "filter_kub",
        "func": "// PM_KUBIKAL\nvar data_core = msg.payload[0]\n\n\nif (data_core === \"kub\"){\n    return msg;\n}\nelse{\n    return null;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 220,
        "wires": [
            [
                "b3b8df4ca52f83da",
                "a0fadd3690ea0b83",
                "b69791ed08defb7e",
                "2168e681013746e2",
                "aff0a98ea3f95909",
                "bbfe656834b0b321",
                "1f9e738f47f34a0c",
                "c203f73a619a00c3",
                "e5986aa704aeb8f0",
                "396f437ed061479c",
                "cab1f3c366b231fb",
                "2c8e886dd77988d1",
                "689e5e5083d4bfdd",
                "e8087b88e6084a37"
            ]
        ]
    },
    {
        "id": "2168e681013746e2",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Active Power Total",
        "func": "\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\nif (data_filter === \"DA_30\") {\n    msg.payload = parseFloat(data_core).toFixed(2);\n    msg.topic = \"Power Now\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4050,
        "y": 380,
        "wires": [
            [
                "f4433712f2d16057",
                "041f50f406e770d8",
                "3c1459376ad6fea0"
            ]
        ]
    },
    {
        "id": "b69791ed08defb7e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Active Energy Delivered (Into Load)",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_01\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = data_core // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4100,
        "y": 340,
        "wires": [
            [
                "d1ff5da588eb6d02"
            ]
        ]
    },
    {
        "id": "aff0a98ea3f95909",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Voltage A-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_23\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4030,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "bbfe656834b0b321",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Voltage B-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_24\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4030,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "1f9e738f47f34a0c",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Voltage C-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_25\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4030,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "c203f73a619a00c3",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Voltage L-L Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_22'\nif (data_filter === \"DA_22\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4040,
        "y": 580,
        "wires": [
            [
                "46a0cfe324b35892"
            ]
        ]
    },
    {
        "id": "e5986aa704aeb8f0",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Currnet A",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_13\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "e8087b88e6084a37",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Voltage L-N Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_18\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4040,
        "y": 920,
        "wires": [
            [
                "9470e2d76cb3e135"
            ]
        ]
    },
    {
        "id": "396f437ed061479c",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Currnet B",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_14\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "cab1f3c366b231fb",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Currnet C",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_15\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "2c8e886dd77988d1",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Currnet N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_16\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "689e5e5083d4bfdd",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Currnet G",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_17\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4020,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "041f50f406e770d8",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Kontrak Daya",
        "func": "msg.payload =2400;\nmsg.topic = \"Kontrak Daya\";\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4340,
        "y": 400,
        "wires": [
            [
                "3c1459376ad6fea0"
            ]
        ]
    },
    {
        "id": "f4433712f2d16057",
        "type": "ui_text",
        "z": "7c7044f25de04ebc",
        "group": "40380b5d11a03403",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Konsumsi Energy Saat Ini",
        "format": "{{msg.payload}} kW",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 4570,
        "y": 340,
        "wires": []
    },
    {
        "id": "d1ff5da588eb6d02",
        "type": "ui_text",
        "z": "7c7044f25de04ebc",
        "group": "ac32321bf02cfb27",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "kWh",
        "format": "{{msg.payload}} kWh",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 4510,
        "y": 300,
        "wires": []
    },
    {
        "id": "46a0cfe324b35892",
        "type": "ui_text",
        "z": "7c7044f25de04ebc",
        "group": "6e5e8d67d38ae7d0",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Voltage L-L Avg",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 4260,
        "y": 580,
        "wires": []
    },
    {
        "id": "9470e2d76cb3e135",
        "type": "ui_text",
        "z": "7c7044f25de04ebc",
        "group": "d333fc4687abcf19",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Current Avg",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 4250,
        "y": 920,
        "wires": []
    },
    {
        "id": "3c1459376ad6fea0",
        "type": "ui_chart",
        "z": "7c7044f25de04ebc",
        "name": "",
        "group": "dddfd0b4959fdb61",
        "order": 1,
        "width": 0,
        "height": 0,
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
        "x": 4560,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "e8aaef6329b3e684",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "LPF3 PM 220",
        "func": "\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"lp_f3\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1430,
        "y": 220,
        "wires": [
            [
                "4ca45a202b23d6bb"
            ]
        ]
    },
    {
        "id": "4ca45a202b23d6bb",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "166edb34a2be5192",
        "name": "",
        "x": 1700,
        "y": 220,
        "wires": [
            [
                "1cc74ba508176434"
            ]
        ]
    },
    {
        "id": "ce03e39218fb28e7",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "KUB KWH TOTAL",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"kub\" && power_meter === \"DA_01\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_kubikal (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1440,
        "y": 270,
        "wires": [
            [
                "aa402891d2b9abb5"
            ]
        ]
    },
    {
        "id": "aa402891d2b9abb5",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "66bbdf3188c2f96b",
        "name": "",
        "x": 1740,
        "y": 270,
        "wires": [
            [
                "c8575e9611523851"
            ]
        ]
    },
    {
        "id": "3c8629dd90a05aa1",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Create SQL Query pm 220",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_pm220 ORDER BY idPrimary DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 420,
        "wires": [
            [
                "4ca45a202b23d6bb",
                "cc6ff2e555c05cb7",
                "1e0ecccbada3e63a",
                "da03a1dd261f4e0d",
                "1c5d8bdac08f2d4d",
                "89addbe9b96191c0",
                "0a5e40d0a7d4f441",
                "d43ef090ebc82259",
                "a7d1fa698e42e4bb",
                "59edd374aa4502c8",
                "8333792bf0db2d76",
                "181878ca0912d5e0",
                "c6bb84bc536a75f0",
                "54d143f9e7020030",
                "5019ff3899a34042",
                "b371c6826c4161b1",
                "7ca24ec25cb68289",
                "33ba72fd61bbf46a",
                "b16014758f30ced2",
                "3b538dae08616a0f",
                "ecac310e772a2fc9"
            ]
        ]
    },
    {
        "id": "1cc74ba508176434",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 280,
        "wires": [
            [
                "a2284f5a65560448"
            ]
        ]
    },
    {
        "id": "bf4ea123609f5bc7",
        "type": "inject",
        "z": "7c7044f25de04ebc",
        "name": "Shift 1 Start",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "10 07 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "start_true",
        "payloadType": "str",
        "x": 230,
        "y": 510,
        "wires": [
            [
                "3c8629dd90a05aa1",
                "8d98dde30f0af91d",
                "5f642d6a265861e9"
            ]
        ]
    },
    {
        "id": "73bac4b526604f99",
        "type": "inject",
        "z": "7c7044f25de04ebc",
        "name": "Shift 2 Start",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "10 20 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "start_true",
        "payloadType": "str",
        "x": 230,
        "y": 550,
        "wires": [
            [
                "3c8629dd90a05aa1",
                "8d98dde30f0af91d",
                "5f642d6a265861e9"
            ]
        ]
    },
    {
        "id": "d8e307fb45d88620",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "166edb34a2be5192",
        "name": "",
        "x": 3470,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "a2284f5a65560448",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift LPF3 PM 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3080,
        "y": 280,
        "wires": [
            [
                "d8e307fb45d88620"
            ]
        ]
    },
    {
        "id": "8d98dde30f0af91d",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Create SQL Query pm kub",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_kubikal ORDER BY idPrimary DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 520,
        "wires": [
            [
                "aa402891d2b9abb5"
            ]
        ]
    },
    {
        "id": "25ec2290bf5ecf51",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "66bbdf3188c2f96b",
        "name": "",
        "x": 3510,
        "y": 350,
        "wires": [
            []
        ]
    },
    {
        "id": "c8575e9611523851",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift PM KUB",
        "func": "if (msg.payload && Array.isArray(msg.payload) && msg.payload.length > 0) {\n    var payload = msg.payload[0]; // Mengambil elemen pertama dari array payload\n\n    if (!payload.date_time) {\n        node.warn(\"date_time is missing in payload: \" + JSON.stringify(payload));\n        return null; // Stop execution if date_time is missing\n    }\n\n    var date_time = new Date(payload.date_time);\n    var power_meter = payload.power_meter;\n    var value = payload.value;\n    var shift;\n\n    var currentHour = date_time.getHours();\n    var currentMinute = date_time.getMinutes();\n    var currentDay = date_time.getDate();\n    var currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7);\n    var currentMonth = date_time.toLocaleString('default', { month: 'long' });\n    var currentYear = date_time.getFullYear();\n\n    if (power_meter === \"DA_01\") {\n        if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n            (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n            shift = \"shift_1\";\n        } else {\n            shift = \"shift_2\";\n        }\n\n        msg.topic = \"INSERT INTO tb_pershift_kub (power_meter, value, shift, day, week, month, year) \" +\n            \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n            \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n        return msg;\n    }\n} else {\n    // node.warn(\"msg.payload is not an array or is empty\");\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2900,
        "y": 330,
        "wires": [
            [
                "25ec2290bf5ecf51",
                "00471d9b37f6299e"
            ]
        ]
    },
    {
        "id": "5f642d6a265861e9",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Create SQL Query pm 200",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_pm200 ORDER BY idPrimary DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 460,
        "wires": [
            [
                "cc6ff2e555c05cb7",
                "1e0ecccbada3e63a",
                "da03a1dd261f4e0d",
                "1c5d8bdac08f2d4d",
                "89addbe9b96191c0",
                "0a5e40d0a7d4f441",
                "d43ef090ebc82259",
                "a7d1fa698e42e4bb",
                "59edd374aa4502c8",
                "8333792bf0db2d76",
                "181878ca0912d5e0",
                "c6bb84bc536a75f0",
                "54d143f9e7020030",
                "5019ff3899a34042",
                "b371c6826c4161b1",
                "33ba72fd61bbf46a",
                "7ca24ec25cb68289",
                "b16014758f30ced2",
                "3b538dae08616a0f",
                "ecac310e772a2fc9"
            ]
        ]
    },
    {
        "id": "1c97f8ae9f01a722",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "if (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 400,
        "wires": [
            [
                "bf0d084c1a30305a",
                "252a2b9ef97fb9fd"
            ]
        ]
    },
    {
        "id": "4c715454738cb35b",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 450,
        "wires": [
            [
                "b82f9f3fdcd6e7ab",
                "9e9b33d9f879c904"
            ]
        ]
    },
    {
        "id": "4966026339679698",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 500,
        "wires": [
            [
                "037c1ded09ee1423",
                "60d2ced562f293e8"
            ]
        ]
    },
    {
        "id": "252a2b9ef97fb9fd",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR1 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 400,
        "wires": [
            [
                "f750efca7b91f160"
            ]
        ]
    },
    {
        "id": "bf0d084c1a30305a",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR1 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 410,
        "wires": [
            [
                "f750efca7b91f160"
            ]
        ]
    },
    {
        "id": "f750efca7b91f160",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9872beaf9e3e7375",
        "name": "",
        "x": 3480,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "ca2c096da17cc379",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "6390bffd50e96f74",
        "name": "",
        "x": 3480,
        "y": 450,
        "wires": [
            []
        ]
    },
    {
        "id": "6621cc0b2aaedd73",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9babe1a5a78be47b",
        "name": "",
        "x": 3480,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "9e9b33d9f879c904",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR2 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 450,
        "wires": [
            [
                "ca2c096da17cc379"
            ]
        ]
    },
    {
        "id": "b82f9f3fdcd6e7ab",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR2 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 460,
        "wires": [
            [
                "ca2c096da17cc379"
            ]
        ]
    },
    {
        "id": "60d2ced562f293e8",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR3 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 500,
        "wires": [
            [
                "6621cc0b2aaedd73"
            ]
        ]
    },
    {
        "id": "037c1ded09ee1423",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR3 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 510,
        "wires": [
            [
                "6621cc0b2aaedd73"
            ]
        ]
    },
    {
        "id": "4d596369cfdff9c9",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 550,
        "wires": [
            [
                "7174682628358211",
                "cbc2c7b6c446b8b0"
            ]
        ]
    },
    {
        "id": "be2a8cc40157bd67",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 600,
        "wires": [
            [
                "dc8869cc26ebce02",
                "9d98d73a96252047"
            ]
        ]
    },
    {
        "id": "21ac621466032a2b",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 650,
        "wires": [
            [
                "3daa9f791e5b8ac7",
                "b8224f95691b250e"
            ]
        ]
    },
    {
        "id": "cbc2c7b6c446b8b0",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR4 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 550,
        "wires": [
            [
                "56c64bc509728517"
            ]
        ]
    },
    {
        "id": "7174682628358211",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR4 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 560,
        "wires": [
            [
                "56c64bc509728517"
            ]
        ]
    },
    {
        "id": "56c64bc509728517",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b2517ce0d5b5a5ba",
        "name": "",
        "x": 3480,
        "y": 550,
        "wires": [
            []
        ]
    },
    {
        "id": "a35c8c9fe8d4f3bf",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "ccda5500b91adc61",
        "name": "",
        "x": 3480,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "d3b6955d5b7636b0",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b75835443c80b493",
        "name": "",
        "x": 3480,
        "y": 650,
        "wires": [
            []
        ]
    },
    {
        "id": "9d98d73a96252047",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR5 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 600,
        "wires": [
            [
                "a35c8c9fe8d4f3bf"
            ]
        ]
    },
    {
        "id": "dc8869cc26ebce02",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR5 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 610,
        "wires": [
            [
                "a35c8c9fe8d4f3bf"
            ]
        ]
    },
    {
        "id": "b8224f95691b250e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR6 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 650,
        "wires": [
            [
                "d3b6955d5b7636b0"
            ]
        ]
    },
    {
        "id": "3daa9f791e5b8ac7",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR6 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 660,
        "wires": [
            [
                "d3b6955d5b7636b0"
            ]
        ]
    },
    {
        "id": "d8a9c5b6f2f80f14",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 700,
        "wires": [
            [
                "143f820f7f611b0d",
                "3b170e6724b41484"
            ]
        ]
    },
    {
        "id": "ece98a2e41f03d93",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 750,
        "wires": [
            [
                "e6dde567bfc6e366",
                "6c7fce823a86daa2"
            ]
        ]
    },
    {
        "id": "b98408dcfeb5001f",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 800,
        "wires": [
            [
                "94fd69ab6c254482",
                "b348bcd0f8b917fe"
            ]
        ]
    },
    {
        "id": "3b170e6724b41484",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR7 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 700,
        "wires": [
            [
                "d7c8133dc8234438"
            ]
        ]
    },
    {
        "id": "143f820f7f611b0d",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR7 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 710,
        "wires": [
            [
                "d7c8133dc8234438"
            ]
        ]
    },
    {
        "id": "d7c8133dc8234438",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "87c592895c269819",
        "name": "",
        "x": 3480,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "95905756bb7ef26a",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b13b8c8bbd996378",
        "name": "",
        "x": 3480,
        "y": 750,
        "wires": [
            []
        ]
    },
    {
        "id": "187d1521f331462c",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9d668a044cc26ee0",
        "name": "",
        "x": 3480,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "6c7fce823a86daa2",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR8 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 750,
        "wires": [
            [
                "95905756bb7ef26a"
            ]
        ]
    },
    {
        "id": "e6dde567bfc6e366",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR8 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 760,
        "wires": [
            [
                "95905756bb7ef26a"
            ]
        ]
    },
    {
        "id": "b348bcd0f8b917fe",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR9 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 800,
        "wires": [
            [
                "187d1521f331462c"
            ]
        ]
    },
    {
        "id": "94fd69ab6c254482",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR9 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 810,
        "wires": [
            [
                "187d1521f331462c"
            ]
        ]
    },
    {
        "id": "5379801ee2973417",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 850,
        "wires": [
            [
                "b5810a1e4e008f37",
                "505db4aa2b76c7e4"
            ]
        ]
    },
    {
        "id": "f6d8de6d91664fb7",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 900,
        "wires": [
            [
                "20ba8013dce5b3d3",
                "3a2801653b094827"
            ]
        ]
    },
    {
        "id": "b9932cc491873ea9",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2880,
        "y": 950,
        "wires": [
            [
                "ca420ae969686478",
                "0ebab57af04fe833"
            ]
        ]
    },
    {
        "id": "505db4aa2b76c7e4",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR10 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 850,
        "wires": [
            [
                "e28a6ab24c2b628b"
            ]
        ]
    },
    {
        "id": "b5810a1e4e008f37",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR10 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 860,
        "wires": [
            [
                "e28a6ab24c2b628b"
            ]
        ]
    },
    {
        "id": "e28a6ab24c2b628b",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "fa0e8c92b974c58c",
        "name": "",
        "x": 3490,
        "y": 850,
        "wires": [
            []
        ]
    },
    {
        "id": "b6eb688ecf063c9b",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "cbfb3d39a29be0a1",
        "name": "",
        "x": 3490,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "3ce6232aeb12a75f",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "62723a09dfa2ded4",
        "name": "",
        "x": 3490,
        "y": 950,
        "wires": [
            []
        ]
    },
    {
        "id": "3a2801653b094827",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR11 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 900,
        "wires": [
            [
                "b6eb688ecf063c9b"
            ]
        ]
    },
    {
        "id": "20ba8013dce5b3d3",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR11 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 910,
        "wires": [
            [
                "b6eb688ecf063c9b"
            ]
        ]
    },
    {
        "id": "0ebab57af04fe833",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR12 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3070,
        "y": 950,
        "wires": [
            [
                "3ce6232aeb12a75f"
            ]
        ]
    },
    {
        "id": "ca420ae969686478",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CR12 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3270,
        "y": 960,
        "wires": [
            [
                "3ce6232aeb12a75f"
            ]
        ]
    },
    {
        "id": "ef1f66bd03fcbc39",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 330,
        "wires": [
            [
                "c49c48f29e9c404e",
                "6c5811f04962ef28"
            ]
        ]
    },
    {
        "id": "6c5811f04962ef28",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift Roller Arm 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2210,
        "y": 330,
        "wires": [
            [
                "4c765a0dcf21543a"
            ]
        ]
    },
    {
        "id": "c49c48f29e9c404e",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift  Roller Arm 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2420,
        "y": 360,
        "wires": [
            [
                "4c765a0dcf21543a"
            ]
        ]
    },
    {
        "id": "4c765a0dcf21543a",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "e01464c7338ba5fd",
        "name": "",
        "x": 2640,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "d00b8e8caa0cb379",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 410,
        "wires": [
            [
                "9b342b0e7f750e51",
                "b1ef12a6c69bd39c"
            ]
        ]
    },
    {
        "id": "b1ef12a6c69bd39c",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift BS2 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 410,
        "wires": [
            [
                "6bb9fe1d63375a40"
            ]
        ]
    },
    {
        "id": "9b342b0e7f750e51",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift BS2 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 420,
        "wires": [
            [
                "6bb9fe1d63375a40"
            ]
        ]
    },
    {
        "id": "a778fbdd4a712e5b",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 490,
        "wires": [
            [
                "5d772c1a2f5891f3",
                "93b8aa299686d3c0"
            ]
        ]
    },
    {
        "id": "93b8aa299686d3c0",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift BS1 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 490,
        "wires": [
            [
                "4b6a883c14c3bdbc"
            ]
        ]
    },
    {
        "id": "5d772c1a2f5891f3",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift BS1 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 500,
        "wires": [
            [
                "4b6a883c14c3bdbc"
            ]
        ]
    },
    {
        "id": "53d7eb554e325e8f",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 630,
        "wires": [
            [
                "d110823584c53aec",
                "de3db544a69375bd"
            ]
        ]
    },
    {
        "id": "de3db544a69375bd",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHAB 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 630,
        "wires": [
            [
                "6fae6f784e10e9bb"
            ]
        ]
    },
    {
        "id": "d110823584c53aec",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHAB 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 640,
        "wires": [
            [
                "6fae6f784e10e9bb"
            ]
        ]
    },
    {
        "id": "9f40abc636a71473",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 710,
        "wires": [
            [
                "132ed4de229c0f26",
                "d644ea879816fbc4"
            ]
        ]
    },
    {
        "id": "d644ea879816fbc4",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHCD 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-1F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 710,
        "wires": [
            [
                "b7f13adbad070768"
            ]
        ]
    },
    {
        "id": "132ed4de229c0f26",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHCD 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-3F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 720,
        "wires": [
            [
                "b7f13adbad070768"
            ]
        ]
    },
    {
        "id": "da369801f1320b01",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 890,
        "wires": [
            [
                "2e809a033d78a223",
                "53da66f5bcb88901"
            ]
        ]
    },
    {
        "id": "53da66f5bcb88901",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHSAC 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2200,
        "y": 890,
        "wires": [
            [
                "0e7c89012a438abb"
            ]
        ]
    },
    {
        "id": "2e809a033d78a223",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHSAC 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2400,
        "y": 910,
        "wires": [
            [
                "0e7c89012a438abb"
            ]
        ]
    },
    {
        "id": "f5dea8a598cc0834",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 970,
        "wires": [
            [
                "c82603be07f0a8e0",
                "2c3e8a2f7e4bc5be"
            ]
        ]
    },
    {
        "id": "2c3e8a2f7e4bc5be",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHEF 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 970,
        "wires": [
            [
                "e2f8b2c5ec20b5bb"
            ]
        ]
    },
    {
        "id": "c82603be07f0a8e0",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift CHEF 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 980,
        "wires": [
            [
                "e2f8b2c5ec20b5bb"
            ]
        ]
    },
    {
        "id": "53596f6830426f06",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.idPrimary,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2000,
        "y": 1100,
        "wires": [
            [
                "780ba4b6feb01ab3",
                "b95047c73d408674"
            ]
        ]
    },
    {
        "id": "b95047c73d408674",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift RET 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2190,
        "y": 1100,
        "wires": [
            [
                "31a4669a1bdda384"
            ]
        ]
    },
    {
        "id": "780ba4b6feb01ab3",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "PerShift RET 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2390,
        "y": 1110,
        "wires": [
            [
                "31a4669a1bdda384"
            ]
        ]
    },
    {
        "id": "31a4669a1bdda384",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "4567d7d49e5fe3d4",
        "name": "",
        "x": 2590,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "e2f8b2c5ec20b5bb",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "a0e98ab7ca79aaed",
        "name": "",
        "x": 2620,
        "y": 970,
        "wires": [
            []
        ]
    },
    {
        "id": "0e7c89012a438abb",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "bcab9e07f2e900d3",
        "name": "",
        "x": 2620,
        "y": 890,
        "wires": [
            []
        ]
    },
    {
        "id": "b7f13adbad070768",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "9c1c867e7a8d014c",
        "name": "",
        "x": 2620,
        "y": 710,
        "wires": [
            []
        ]
    },
    {
        "id": "6fae6f784e10e9bb",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "4c4ebdfc64378e5e",
        "name": "",
        "x": 2620,
        "y": 630,
        "wires": [
            []
        ]
    },
    {
        "id": "4b6a883c14c3bdbc",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "61f0b1155bd5122a",
        "name": "",
        "x": 2610,
        "y": 490,
        "wires": [
            []
        ]
    },
    {
        "id": "6bb9fe1d63375a40",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "0cd6b0e2d16c9d85",
        "name": "",
        "x": 2610,
        "y": 410,
        "wires": [
            []
        ]
    },
    {
        "id": "7e79e22c4ff8e1e1",
        "type": "function",
        "z": "7c7044f25de04ebc",
        "name": "another facility",
        "func": "var array = msg.payload;\n\nif (array[0] === \"DP_QG_CT\") {\n    var sql = `INSERT INTO tb_panel_qg_ct (panel, code_power_meter, power_watt, energy_wh, current_a, voltage_v) \n                VALUES ('${array[0]}', '${array[1]}', '${array[2]}', '${array[3]}', '${array[4]}', '${array[5]}')`;\n\n    msg.topic = sql;\n    return msg;\n}else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1350,
        "wires": [
            [
                "89a40b78a934f76e"
            ]
        ]
    },
    {
        "id": "89a40b78a934f76e",
        "type": "mysql",
        "z": "7c7044f25de04ebc",
        "mydb": "b02462dd1244e7d8",
        "name": "",
        "x": 1070,
        "y": 1350,
        "wires": [
            []
        ]
    },
    {
        "id": "9fc10117bbe344fb",
        "type": "mqtt in",
        "z": "7c7044f25de04ebc",
        "name": "",
        "topic": "topic_coreengine_server",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "5aa7e47a49afb254",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 170,
        "y": 120,
        "wires": [
            [
                "9245d6772084e8de",
                "3a7120e1dd0230ef",
                "b13977092e127616",
                "05283690c0bd328a",
                "8004cd08016f7cbc",
                "44f6b23c7a4e97be",
                "83b2d74c1dd66e01",
                "74c3585dbf08e2a3"
            ]
        ]
    },
    {
        "id": "00471d9b37f6299e",
        "type": "debug",
        "z": "7c7044f25de04ebc",
        "name": "debug 3",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 3110,
        "y": 230,
        "wires": []
    },
    {
        "id": "e01464c7338ba5fd",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_roller_arm",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9872beaf9e3e7375",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_1",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "6390bffd50e96f74",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_2",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9babe1a5a78be47b",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_3",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b2517ce0d5b5a5ba",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_4",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "ccda5500b91adc61",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_5",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b75835443c80b493",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_6",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "87c592895c269819",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_7",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "fa0e8c92b974c58c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_10",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b13b8c8bbd996378",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_8",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9d668a044cc26ee0",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_9",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "cbfb3d39a29be0a1",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_11",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "62723a09dfa2ded4",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_12",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "0cd6b0e2d16c9d85",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_balance_shaft_1",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "61f0b1155bd5122a",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_balance_shaft_2",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "4c4ebdfc64378e5e",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_ab",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9c1c867e7a8d014c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_cd",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "4567d7d49e5fe3d4",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_retainer",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "a0e98ab7ca79aaed",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_ef",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "bcab9e07f2e900d3",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_sac",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "ae4131ddb4c0b286",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "database_tps_montiv",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b749c750c5583ae4",
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
        "width": 5,
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
        "width": "5",
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
        "width": 5,
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
        "width": 5,
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
        "id": "166edb34a2be5192",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_lpf3",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "66bbdf3188c2f96b",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_area_compressor",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b02462dd1244e7d8",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_facility",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "5aa7e47a49afb254",
        "type": "mqtt-broker",
        "name": "",
        "broker": "192.168.1.5",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "autoUnsubscribe": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthRetain": "false",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closeRetain": "false",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willRetain": "false",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
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
