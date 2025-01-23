[
    {
        "id": "ddab0f5a50be2b8a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Roller Arm ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"roller_arm\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 270,
        "wires": [
            [
                "fe307eb8fcc412e5"
            ]
        ]
    },
    {
        "id": "c2e88a182464d175",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Roller Arm ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"roller_arm\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 310,
        "wires": [
            [
                "fe307eb8fcc412e5"
            ]
        ]
    },
    {
        "id": "66ba50ba111f7d3c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR2 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_2\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 350,
        "wires": [
            [
                "5dd071d2df54bb6a"
            ]
        ]
    },
    {
        "id": "4a6195da0deb5abd",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR2 ALL PM 220",
        "func": "\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_2\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 390,
        "wires": [
            [
                "5dd071d2df54bb6a"
            ]
        ]
    },
    {
        "id": "7081ca9dde19047d",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR1 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_1\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 270,
        "wires": [
            [
                "c1b43cda34f8c85e"
            ]
        ]
    },
    {
        "id": "8d29cd18b3c92225",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR1 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_1\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 310,
        "wires": [
            [
                "c1b43cda34f8c85e"
            ]
        ]
    },
    {
        "id": "88f9abe5b4799e9c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR3 ALL PM 200",
        "func": "\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_3\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 430,
        "wires": [
            [
                "500da3188674209b"
            ]
        ]
    },
    {
        "id": "718e672c13fa8232",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR3 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_3\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 470,
        "wires": [
            [
                "500da3188674209b"
            ]
        ]
    },
    {
        "id": "50166b4e9536dcb8",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR4 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_4\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 550,
        "wires": [
            [
                "db35b5b8f7c99cf4"
            ]
        ]
    },
    {
        "id": "35681e67027763c5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR4 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_4\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 510,
        "wires": [
            [
                "db35b5b8f7c99cf4"
            ]
        ]
    },
    {
        "id": "625daa940f263726",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR5 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_5\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 630,
        "wires": [
            [
                "d3036ff1944291b4"
            ]
        ]
    },
    {
        "id": "65ccd3416f836fa7",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR5 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_5\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 590,
        "wires": [
            [
                "d3036ff1944291b4"
            ]
        ]
    },
    {
        "id": "720d9a369a025b12",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR6 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_6\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 710,
        "wires": [
            [
                "a9b59caba456695a"
            ]
        ]
    },
    {
        "id": "705d34bf95653c91",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR6 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_6\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 670,
        "wires": [
            [
                "a9b59caba456695a"
            ]
        ]
    },
    {
        "id": "85b0628d46ebc71e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR7 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_7\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 750,
        "wires": [
            [
                "9e6eb878dfd3b793"
            ]
        ]
    },
    {
        "id": "a62219d4364b8aa8",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR7 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_7\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 790,
        "wires": [
            [
                "9e6eb878dfd3b793"
            ]
        ]
    },
    {
        "id": "c0f85d4a415addaa",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR8 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_8\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 870,
        "wires": [
            [
                "adb02c2cdbeb4396"
            ]
        ]
    },
    {
        "id": "8b092e59dc2476d0",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR8 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_8\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 830,
        "wires": [
            [
                "adb02c2cdbeb4396"
            ]
        ]
    },
    {
        "id": "ad59503116f9c8c0",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR9 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_9\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 910,
        "wires": [
            [
                "b1751f5effa1f005"
            ]
        ]
    },
    {
        "id": "9fa1909c28599c25",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR9 ALL PM 220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_9\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 950,
        "wires": [
            [
                "b1751f5effa1f005"
            ]
        ]
    },
    {
        "id": "0d682ed6510df467",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR10 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_10\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 1030,
        "wires": [
            [
                "71429ca93f02afb2"
            ]
        ]
    },
    {
        "id": "1283c8b22796725d",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR10 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_10\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 990,
        "wires": [
            [
                "71429ca93f02afb2"
            ]
        ]
    },
    {
        "id": "2ecffbf48ff6ca8c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR11 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_11\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 1110,
        "wires": [
            [
                "761156629011d5d7"
            ]
        ]
    },
    {
        "id": "011060ad306f3dcf",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR11 ALL PM 200",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_11\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 1070,
        "wires": [
            [
                "761156629011d5d7"
            ]
        ]
    },
    {
        "id": "e0f43c367b86d7d7",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR12 ALL PM 200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_12\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 1150,
        "wires": [
            [
                "40034910fdcd2648"
            ]
        ]
    },
    {
        "id": "66dbf203aa76ea62",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "CR12 ALL PM 220",
        "func": "\n\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = parseFloat(msg.payload[2]); // Pastikan nilai adalah angka terlebih dahulu\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate();\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7);\nvar currentMonth = now.toLocaleString('default', { month: 'long' });\nvar currentYear = now.getFullYear();\n\n// Nilai minimum\nvar minValue = 0.00;\n\nif (panel === \"CR_12\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Validasi nilai minimum\n    if (value >= minValue) {\n        // Data valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}');`;\n    } else {\n        // Data tidak valid, ubah value menjadi string sebelum query\n        var valueStr = value.toString();\n        msg.topic = `INSERT INTO tb_abnormal_data (power_meter, value, shift, day, week, month, year, reason) \n                     VALUES ('${power_meter}', '${valueStr}', '${shift}', '${currentDay}', '${currentWeek}', '${currentMonth}', '${currentYear}', 'Value below minimum');`;\n    }\n\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 1190,
        "wires": [
            [
                "40034910fdcd2648"
            ]
        ]
    },
    {
        "id": "5241a89a6bb5a8c6",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing AB PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH\" && power_meter === \"PM-200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 610,
        "wires": [
            [
                "ba1c824ce0d92531"
            ]
        ]
    },
    {
        "id": "7a2f029598b6b8b4",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing AB PM220V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH\" && power_meter === \"PM-220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 570,
        "wires": [
            [
                "ba1c824ce0d92531"
            ]
        ]
    },
    {
        "id": "d57188de29cbb272",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing CD PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH-CD\" && power_meter === \"PM-3F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 690,
        "wires": [
            [
                "094282b73aa1e950"
            ]
        ]
    },
    {
        "id": "9139e9362d092b0a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing CD PM220V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"DPCH-CD\" && power_meter === \"PM-1F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 650,
        "wires": [
            [
                "094282b73aa1e950"
            ]
        ]
    },
    {
        "id": "f3690bcf0faf6144",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "retainer_pm200",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"RET\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1310,
        "y": 1080,
        "wires": [
            [
                "afc3a2f5d04efc82"
            ]
        ]
    },
    {
        "id": "4c2c69f5623e1117",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "retainer_pm220",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"RET\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1310,
        "y": 1040,
        "wires": [
            [
                "afc3a2f5d04efc82"
            ]
        ]
    },
    {
        "id": "e024146ae7b14e3c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Balance Shaft 1 PM200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_1\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 390,
        "wires": [
            [
                "0aed2f964512720d"
            ]
        ]
    },
    {
        "id": "dc0cb4ba558da783",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Balance Shaft 1 PM220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_1\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 350,
        "wires": [
            [
                "0aed2f964512720d"
            ]
        ]
    },
    {
        "id": "5a5b6e11915b0ac4",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Balance Shaft 2 PM200",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_2\" && power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 470,
        "wires": [
            [
                "fbfbec78769cfb79"
            ]
        ]
    },
    {
        "id": "3b04d2e3d7851ef4",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Balance Shaft 2 PM220",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"BS_2\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 430,
        "wires": [
            [
                "fbfbec78769cfb79"
            ]
        ]
    },
    {
        "id": "90b556e22197f432",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing EF PM220V",
        "func": "\n\n\nvar panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_EF\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 910,
        "wires": [
            [
                "2ee5d9a27cbafc38"
            ]
        ]
    },
    {
        "id": "3ab81c24f5e1c1b7",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing EF PM200V",
        "func": "var panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_EF\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 950,
        "wires": [
            [
                "2ee5d9a27cbafc38"
            ]
        ]
    },
    {
        "id": "fbc13aad2e17e5a3",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing SAC PM220V",
        "func": "\n\n\nvar panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_SAC\" && power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 830,
        "wires": [
            [
                "fd4654b8cb5acdad"
            ]
        ]
    },
    {
        "id": "5ce73b322b231ff3",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Camp Housing SAC PM200V",
        "func": "\nvar panel = msg.payload[1];\nvar power_meter = msg.payload[2];\nvar value = msg.payload[3];\nvar shift;\n\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"CH_SAC\" && power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 870,
        "wires": [
            [
                "fd4654b8cb5acdad"
            ]
        ]
    },
    {
        "id": "ebdc796a1b2bbeed",
        "type": "debug",
        "z": "c8888449da0b5d56",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 700,
        "y": 200,
        "wires": []
    },
    {
        "id": "b37bc4534c27ec3e",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 460,
        "y": 200,
        "wires": [
            [
                "ddab0f5a50be2b8a",
                "c2e88a182464d175",
                "66ba50ba111f7d3c",
                "4a6195da0deb5abd",
                "7081ca9dde19047d",
                "8d29cd18b3c92225",
                "88f9abe5b4799e9c",
                "718e672c13fa8232",
                "50166b4e9536dcb8",
                "35681e67027763c5",
                "625daa940f263726",
                "65ccd3416f836fa7",
                "720d9a369a025b12",
                "705d34bf95653c91",
                "85b0628d46ebc71e",
                "a62219d4364b8aa8",
                "c0f85d4a415addaa",
                "8b092e59dc2476d0",
                "ad59503116f9c8c0",
                "9fa1909c28599c25",
                "0d682ed6510df467",
                "1283c8b22796725d",
                "2ecffbf48ff6ca8c",
                "011060ad306f3dcf",
                "e0f43c367b86d7d7",
                "66dbf203aa76ea62",
                "5241a89a6bb5a8c6",
                "7a2f029598b6b8b4",
                "d57188de29cbb272",
                "9139e9362d092b0a",
                "f3690bcf0faf6144",
                "4c2c69f5623e1117",
                "e024146ae7b14e3c",
                "dc0cb4ba558da783",
                "5a5b6e11915b0ac4",
                "3b04d2e3d7851ef4",
                "90b556e22197f432",
                "3ab81c24f5e1c1b7",
                "fbc13aad2e17e5a3",
                "5ce73b322b231ff3",
                "ebdc796a1b2bbeed",
                "b1d7746be3a8e136",
                "a1ef9c225010e078",
                "8a2d81d5516b5562"
            ]
        ]
    },
    {
        "id": "fe307eb8fcc412e5",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "cd6256241c4fabae",
        "name": "",
        "x": 1610,
        "y": 270,
        "wires": [
            [
                "e2f93d400518f7e1"
            ]
        ]
    },
    {
        "id": "c1b43cda34f8c85e",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "e94f313890e9ee6e",
        "name": "",
        "x": 970,
        "y": 270,
        "wires": [
            [
                "cd1262b48e4864b5"
            ]
        ]
    },
    {
        "id": "5dd071d2df54bb6a",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "5488980f919ceaa4",
        "name": "",
        "x": 970,
        "y": 350,
        "wires": [
            [
                "a14593d6b0951c71"
            ]
        ]
    },
    {
        "id": "500da3188674209b",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "bea9f0c488e86cb7",
        "name": "",
        "x": 970,
        "y": 430,
        "wires": [
            [
                "ad6374b71bec2b75"
            ]
        ]
    },
    {
        "id": "db35b5b8f7c99cf4",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "94666f05d9809eaf",
        "name": "",
        "x": 970,
        "y": 510,
        "wires": [
            [
                "6d1376a439c6425e"
            ]
        ]
    },
    {
        "id": "d3036ff1944291b4",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "ff9678e117a171bb",
        "name": "",
        "x": 970,
        "y": 590,
        "wires": [
            [
                "918535629cae1554"
            ]
        ]
    },
    {
        "id": "a9b59caba456695a",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "7b156dba9d601e6f",
        "name": "",
        "x": 970,
        "y": 670,
        "wires": [
            [
                "7d2e1163e8afa582"
            ]
        ]
    },
    {
        "id": "9e6eb878dfd3b793",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "de0ec8eeea84b0f2",
        "name": "",
        "x": 970,
        "y": 750,
        "wires": [
            [
                "61f954ffadd73836"
            ]
        ]
    },
    {
        "id": "71429ca93f02afb2",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "a6ad9d5aa68a2387",
        "name": "",
        "x": 980,
        "y": 990,
        "wires": [
            [
                "8b6236aeb73a4812"
            ]
        ]
    },
    {
        "id": "adb02c2cdbeb4396",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "2c9685938e9c25d6",
        "name": "",
        "x": 970,
        "y": 830,
        "wires": [
            [
                "1e1594d77e2374c3"
            ]
        ]
    },
    {
        "id": "b1751f5effa1f005",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "efd4140388914319",
        "name": "",
        "x": 970,
        "y": 910,
        "wires": [
            [
                "167b2889560c939c"
            ]
        ]
    },
    {
        "id": "761156629011d5d7",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "0dc4edb4cc0a9dae",
        "name": "",
        "x": 980,
        "y": 1070,
        "wires": [
            [
                "b053e0f1ec6b821b"
            ]
        ]
    },
    {
        "id": "40034910fdcd2648",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "9cc8a7a8732b9d23",
        "name": "",
        "x": 980,
        "y": 1130,
        "wires": [
            [
                "d0ca869098ba38f5"
            ]
        ]
    },
    {
        "id": "0aed2f964512720d",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "98b61e957a070e20",
        "name": "",
        "x": 1630,
        "y": 350,
        "wires": [
            [
                "2cc39ab05fdaa722"
            ]
        ]
    },
    {
        "id": "fbfbec78769cfb79",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "8250031a218afb87",
        "name": "",
        "x": 1630,
        "y": 430,
        "wires": [
            [
                "deb280e4c1a8d03a"
            ]
        ]
    },
    {
        "id": "ba1c824ce0d92531",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "4b883db3f93286cc",
        "name": "",
        "x": 1630,
        "y": 570,
        "wires": [
            [
                "6ac7b588a4a96239"
            ]
        ]
    },
    {
        "id": "094282b73aa1e950",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "d8e32c894dde12a8",
        "name": "",
        "x": 1630,
        "y": 650,
        "wires": [
            [
                "deacd6021457bdd8"
            ]
        ]
    },
    {
        "id": "afc3a2f5d04efc82",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "ad586c95de209e28",
        "name": "",
        "x": 1600,
        "y": 1040,
        "wires": [
            [
                "b3abdd412bf59f26"
            ]
        ]
    },
    {
        "id": "2ee5d9a27cbafc38",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "2df47be94f9509c2",
        "name": "",
        "x": 1630,
        "y": 910,
        "wires": [
            [
                "20bcd7aaa8d9f61e"
            ]
        ]
    },
    {
        "id": "fd4654b8cb5acdad",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "8419412e00c26dc9",
        "name": "",
        "x": 1630,
        "y": 830,
        "wires": [
            [
                "be5b64b31b3e5174"
            ]
        ]
    },
    {
        "id": "6b4eb10087a8d12b",
        "type": "debug",
        "z": "c8888449da0b5d56",
        "name": "debug 2",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 160,
        "wires": []
    },
    {
        "id": "1f52a76f18f81f6f",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 410,
        "y": 160,
        "wires": [
            [
                "6b4eb10087a8d12b"
            ]
        ]
    },
    {
        "id": "d209b17ad84b1210",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "query_sql_montiv",
        "func": "var line_id\nvar name_product\nvar target\nvar actual\nvar loading_time\nvar efficiency\nvar delay\nvar cycle_time\nvar status_montiv\nvar loading_time\nvar status_hikitori\nvar time_trouble\nvar time_trouble_quality\nvar andon\nvar line_name\nvar pg\n\nline_id = msg.payload[0]\nname_product = msg.payload[1]\ntarget = msg.payload[2]\nactual = msg.payload[3]\nloading_time = msg.payload[4]\nefficiency = msg.payload[5]\ndelay = msg.payload[6]\ncycle_time = msg.payload[7]\nstatus_montiv = msg.payload[8]\ntime_trouble = msg.payload[9]\ntime_trouble_quality = msg.payload[10]\nandon = msg.payload[11]\n\nif (line_id == \"1\") {\n    line_name = 'Common Rail 1'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"2\") {\n    line_name = 'Common Rail 2'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"3\") {\n    line_name = 'Common Rail 3'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"4\") {\n    line_name = 'Common Rail 4'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"5\") {\n\n    line_name = 'Common Rail 5'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"6\") {\n    line_name = 'Common Rail 6'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"7\") {\n    line_name = 'Common Rail 7'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"8\") {\n    line_name = 'Common Rail 8'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"9\") {\n    line_name = 'Common Rail 9'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"10\") {\n    line_name = 'Common Rail 10'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"11\") {\n    line_name = 'Common Rail 11'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"12\") {\n    line_name = 'Common Rail 12'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n// else if (line_id == \"13\") {\n//     line_name = 'Cam housing'\n//     pg = 'PG2.3'\n//     msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n// }    return msg;\nelse if (line_id == \"13A\") {\n    line_name = 'Cam housing A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id == \"13B\") {\n    line_name = 'Cam housing B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id == \"14\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values (null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"14A\") {\n    line_name = 'Cam housing C'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"14B\") {\n    line_name = 'Cam housing D'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"15\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n   return msg;\n}\nelse if (line_id == \"15A\") {\n    line_name = 'Cam housing E NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"15B\") {\n    line_name = 'Cam housing E D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"16\") {\n    line_name = 'Cam housing Assy A'\n    pg = 'PG2.3'\n}\n\nelse if (line_id == \"17\") {\n    line_name = 'Cam housing Assy B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"18\") {\n    line_name = 'Cam housing Assy'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"18A\") {\n    line_name = 'Cam housing Assy C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"18B\") {\n    line_name = 'Cam housing Assy C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"19\") {\n    line_name = 'Cam Cap 1A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"20\") {\n    line_name = 'Cam Cap 1B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"21\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"21A\") {\n    line_name = 'Cam Cap 1C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"21B\") {\n    line_name = 'Cam Cap 1C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"22\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22A\") {\n    line_name = 'Cam Cap 2 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22B\") {\n    line_name = 'Cam Cap 2 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22C\") {\n    line_name = 'Cam Cap 2 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"22D\") {\n    line_name = 'Cam Cap 2 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"23\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23A\") {\n    line_name = 'Cam Cap 3 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23B\") {\n    line_name = 'Cam Cap 3 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23C\") {\n    line_name = 'Cam Cap 3 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"23D\") {\n    line_name = 'Cam Cap 3 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"24\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24A\") {\n    line_name = 'Cam Cap 4 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24B\") {\n    line_name = 'Cam Cap 4 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24C\") {\n    line_name = 'Cam Cap 4 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"24D\") {\n    line_name = 'Cam Cap 4 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"25\") {\n    line_name = 'Cam Cap 2 & 3 D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\n\n\n\n\nelse if (line_id == \"26\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \n\nelse if (line_id == \"26A\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}   \nelse if (line_id == \"27\") {\n    line_name = 'Connector'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27A\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27B\") {\n    line_name = 'Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"27C\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"28\") {\n    line_name = 'Housing'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"28A\") {\n    line_name = 'Housing Inlet TR '\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"28B\") {\n    line_name = 'Housing Inlet D13E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\n\nelse if (line_id == \"29\") {\n    line_name = 'Balance Shaft NO 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"29A\") {\n    line_name = 'Balance Shaft NO 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"30\") {\n    line_name = 'Roller Arm 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30A\") {\n    line_name = 'Roller Arm 1 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30B\") {\n    line_name = 'Roller Arm 1 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30C\") {\n    line_name = 'Roller Arm 1 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30D\") {\n    line_name = 'Roller Arm 1 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"30E\") {\n    line_name = 'Roller Arm 1 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\n\nelse if (line_id == \"31\") {\n    line_name = 'Roller Arm 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31A\") {\n    line_name = 'Roller Arm 2 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31B\") {\n    line_name = 'Roller Arm 2 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31C\") {\n    line_name = 'Roller Arm 2 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31D\") {\n    line_name = 'Roller Arm 2 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"31E\") {\n    line_name = 'Roller Arm 2 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32\") {\n    line_name = 'Hydraulic Lash Adjuster'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"32A\") {\n    line_name = 'Hydraulic Lash Adjuster A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32B\") {\n    line_name = 'Hydraulic Lash Adjuster B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32C\") {\n    line_name = 'Hydraulic Lash Adjuster C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32D\") {\n    line_name = 'Hydraulic Lash Adjuster D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"32E\") {\n    line_name = 'Hydraulic Lash Adjuster E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}\nelse if (line_id == \"33\") {\n    line_name = 'Housing Inlet Water'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34\") {\n    line_name = 'Packing IMV'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34A\") {\n    line_name = 'Packing IMV 1'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34B\") {\n    line_name = 'Packing IMV 2'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34C\") {\n    line_name = 'Packing IMV 3'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34D\") {\n    line_name = 'Packing IMV 4'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34E\") {\n    line_name = 'Packing IMV 5'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34F\") {\n    line_name = 'Packing IMV 6'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34G\") {\n    line_name = 'Packing IMV 7'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34H\") {\n    line_name = 'Packing IMV 8'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34I\") {\n    line_name = 'Packing IMV 9'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34J\") {\n    line_name = 'Packing IMV 10'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34K\") {\n    line_name = 'Packing IMV 11'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34L\") {\n    line_name = 'Packing IMV 12'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34M\") {\n    line_name = 'Packing IMV 13'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34N\") {\n    line_name = 'Packing IMV 14'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34O\") {\n    line_name = 'Packing IMV 15'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34P\") {\n    line_name = 'Packing IMV 16'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34Q\") {\n    line_name = 'Packing IMV 17'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"34R\") {\n    line_name = 'Packing IMV 18'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n} else if (line_id == \"35\") {\n    line_name = 'Packing Common Rail'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n    return msg;\n}else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 570,
        "y": 40,
        "wires": [
            [
                "dd96304277276921"
            ]
        ]
    },
    {
        "id": "dd96304277276921",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "dd07523e193c906c",
        "name": "",
        "x": 790,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "fe0149da4c326706",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "f18e648680d8d15a",
        "name": "",
        "x": 790,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "7aa1bf857928f2aa",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "query_sql_himos",
        "func": "var name_hikitori = msg.payload[0];\nvar actual_pouling = msg.payload[1];\nvar loading_time = msg.payload[2];\nvar status = msg.payload[3];\nvar cycle_normal = msg.payload[4];\nvar andon = msg.payload[5];\n\nvar validHikitoriIds = [\"HIKITORI A\", \"HIKITORI B\", \"HIKITORI C\", \"HIKITORI D\", \"HIKITORI E\", \"HIKITORI F\", \"HIKITORI G\", \"HIKITORI H\"];\n\nif (validHikitoriIds.includes(name_hikitori)) {\n    msg.topic = `INSERT INTO table_all_himos (id, name_hikitori, actual_pouling, loading_time, status, cycle_normal\t, andon) values(null, '${name_hikitori}', '${actual_pouling}', '${loading_time}', '${status}', '${cycle_normal\t}', '${andon}');`;\n} else {\n    // Tidak melakukan apapun jika data_condition tidak sama dengan \"signal\"\n    return null;\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 570,
        "y": 120,
        "wires": [
            [
                "fe0149da4c326706"
            ]
        ]
    },
    {
        "id": "0f13a0abdd8898b2",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 410,
        "y": 120,
        "wires": [
            [
                "7aa1bf857928f2aa"
            ]
        ]
    },
    {
        "id": "2aee078665f27e59",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 410,
        "y": 80,
        "wires": [
            [
                "d209b17ad84b1210"
            ]
        ]
    },
    {
        "id": "a384b234f2e176db",
        "type": "debug",
        "z": "c8888449da0b5d56",
        "name": "Serial_COM_After",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 4320,
        "y": 120,
        "wires": []
    },
    {
        "id": "628ea0b01550ac90",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 4160,
        "y": 120,
        "wires": [
            [
                "a384b234f2e176db"
            ]
        ]
    },
    {
        "id": "e01c8d7302bfa3ca",
        "type": "debug",
        "z": "c8888449da0b5d56",
        "name": "Serial_COM",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 4180,
        "y": 80,
        "wires": []
    },
    {
        "id": "c3231627f34840b5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "KUBIKAL==>(watt_hour)",
        "func": "// PM_KUBIKAL\nvar data_code = msg.payload[1]\nvar value_code = msg.payload[2]\n\n\n\nif (data_code === \"DA_01\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Into_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_02\") {\n    msg.topic = \"INSERT INTO Active_Energy_Received_Out_of_Load (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_03\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_04\") {\n    msg.topic = \"INSERT INTO Active_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_05\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_06\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_07\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_08\") {\n    msg.topic = \"INSERT INTO Reactive_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_09\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_10\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_11\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_12\") {\n    msg.topic = \"INSERT INTO Apparent_Energy_Delivered_Received (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_13\") {\n    msg.topic = \"INSERT INTO Current_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_14\") {\n    msg.topic = \"INSERT INTO Current_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_15\") {\n    msg.topic = \"INSERT INTO Current_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_16\") {\n    msg.topic = \"INSERT INTO Current_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_17\") {\n    msg.topic = \"INSERT INTO Current_G (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_18\") {\n    msg.topic = \"INSERT INTO Current_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_19\") {\n    msg.topic = \"INSERT INTO Voltage_A_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_20\") {\n    msg.topic = \"INSERT INTO Voltage_B_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_21\") {\n    msg.topic = \"INSERT INTO Voltage_C_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_22\") {\n    msg.topic = \"INSERT INTO Voltage_L_L_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_23\") {\n    msg.topic = \"INSERT INTO Voltage_A_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_24\") {\n    msg.topic = \"INSERT INTO Voltage_B_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_25\") {\n    msg.topic = \"INSERT INTO Voltage_C_N (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_26\") {\n    msg.topic = \"INSERT INTO Voltage_L_N_Avg (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_27\") {\n    msg.topic = \"INSERT INTO Active_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_28\") {\n    msg.topic = \"INSERT INTO Active_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_29\") {\n    msg.topic = \"INSERT INTO Active_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_30\") {\n    msg.topic = \"INSERT INTO Active_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_31\") {\n    msg.topic = \"INSERT INTO Reactive_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_32\") {\n    msg.topic = \"INSERT INTO Reactive_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_33\") {\n    msg.topic = \"INSERT INTO Reactive_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_34\") {\n    msg.topic = \"INSERT INTO Reactive_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_35\") {\n    msg.topic = \"INSERT INTO Apparent_Power_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_36\") {\n    msg.topic = \"INSERT INTO Apparent_Power_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_37\") {\n    msg.topic = \"INSERT INTO Apparent_Power_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_38\") {\n    msg.topic = \"INSERT INTO Apparent_Power_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_39\") {\n    msg.topic = \"INSERT INTO Power_Factor_A (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_40\") {\n    msg.topic = \"INSERT INTO Power_Factor_B (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_41\") {\n    msg.topic = \"INSERT INTO Power_Factor_C (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_42\") {\n    msg.topic = \"INSERT INTO Power_Factor_Total (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_43\") {\n    msg.topic = \"INSERT INTO Frequency (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_44\") {\n    msg.topic = \"INSERT INTO Year (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_45\") {\n    msg.topic = \"INSERT INTO Month (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_46\") {\n    msg.topic = \"INSERT INTO Day (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_47\") {\n    msg.topic = \"INSERT INTO Hour (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_48\") {\n    msg.topic = \"INSERT INTO Minute (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else if (data_code === \"DA_49\") {\n    msg.topic = \"INSERT INTO Second (id, data_inti) values(null, '\" + value_code + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4380,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "2341e37714485732",
        "type": "string",
        "z": "c8888449da0b5d56",
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
        "x": 4180,
        "y": 160,
        "wires": [
            [
                "c289e908b8a6d109"
            ]
        ]
    },
    {
        "id": "043e765b181003fe",
        "type": "debug",
        "z": "c8888449da0b5d56",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 4590,
        "y": 240,
        "wires": []
    },
    {
        "id": "c289e908b8a6d109",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "filter_kub",
        "func": "// PM_KUBIKAL\nvar data_core = msg.payload[0]\n\n\nif (data_core === \"kub\"){\n    return msg;\n}\nelse{\n    return null;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 160,
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
        "id": "9108c280fab87d0f",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Active Power Total",
        "func": "\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\nif (data_filter === \"DA_30\") {\n    msg.payload = parseFloat(data_core).toFixed(2);\n    msg.topic = \"Power Now\";\n    return msg;\n} else {\n    return null;\n}\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4360,
        "y": 320,
        "wires": [
            [
                "3e569cdfaf452726",
                "9bc9616a9601fee5",
                "074dd5a770277b99"
            ]
        ]
    },
    {
        "id": "e17ae73ac2bda443",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Active Energy Delivered (Into Load)",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_01\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = data_core // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4410,
        "y": 280,
        "wires": [
            [
                "52b8791c5d4408d7"
            ]
        ]
    },
    {
        "id": "7b67013c08809828",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Voltage A-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_23\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4340,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "e98ced26bf0f4b0f",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Voltage B-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_24\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4340,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "fe721dd046716add",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Voltage C-N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_25\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4340,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "0d72bd421617bb3c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Voltage L-L Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_22'\nif (data_filter === \"DA_22\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4350,
        "y": 520,
        "wires": [
            [
                "50ecb53ea7f5296c"
            ]
        ]
    },
    {
        "id": "5dcdd8516201577f",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Currnet A",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_13\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "8f27395a2523a251",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Voltage L-N Avg",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_18\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4350,
        "y": 860,
        "wires": [
            [
                "885fe852068eee87"
            ]
        ]
    },
    {
        "id": "52c2257456a16fd1",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Currnet B",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_14\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "838c557b1cc8e7a9",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Currnet C",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_15\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "3725ce24c4e0256e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Currnet N",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_16\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "9b0698ab99c6df34",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Currnet G",
        "func": "// Extract active energy data\nvar data_filter = msg.payload[1];\nvar data_core = msg.payload[2];\n\n// Check if data_filter matches 'DA_30'\nif (data_filter === \"DA_17\") {\n    // Convert to a number and format to 2 decimal places\n    msg.payload = parseFloat(data_core).toFixed(2); // Set payload to core data formatted to 2 decimal places\n} else {\n    return null; // Exit if condition is not met\n}\nreturn msg; // Ensure the msg is returned\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4330,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "9bc9616a9601fee5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Kontrak Daya",
        "func": "msg.payload =2400;\nmsg.topic = \"Kontrak Daya\";\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 4650,
        "y": 340,
        "wires": [
            [
                "074dd5a770277b99"
            ]
        ]
    },
    {
        "id": "3e569cdfaf452726",
        "type": "ui_text",
        "z": "c8888449da0b5d56",
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
        "x": 4880,
        "y": 280,
        "wires": []
    },
    {
        "id": "52b8791c5d4408d7",
        "type": "ui_text",
        "z": "c8888449da0b5d56",
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
        "x": 4820,
        "y": 240,
        "wires": []
    },
    {
        "id": "50ecb53ea7f5296c",
        "type": "ui_text",
        "z": "c8888449da0b5d56",
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
        "x": 4570,
        "y": 520,
        "wires": []
    },
    {
        "id": "885fe852068eee87",
        "type": "ui_text",
        "z": "c8888449da0b5d56",
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
        "x": 4560,
        "y": 860,
        "wires": []
    },
    {
        "id": "074dd5a770277b99",
        "type": "ui_chart",
        "z": "c8888449da0b5d56",
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
        "x": 4870,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "7a56319ccf13d042",
        "type": "mqtt in",
        "z": "c8888449da0b5d56",
        "name": "",
        "topic": "topic_coreengine_server",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "88d46435f2237a01",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 80,
        "wires": [
            [
                "b37bc4534c27ec3e",
                "1f52a76f18f81f6f",
                "0f13a0abdd8898b2",
                "2aee078665f27e59",
                "628ea0b01550ac90",
                "e01c8d7302bfa3ca",
                "2341e37714485732"
            ]
        ]
    },
    {
        "id": "b1d7746be3a8e136",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "LPF3 PM 220",
        "func": "\n\n\nvar panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"lp_f3\" && power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 160,
        "wires": [
            [
                "7e30ecb363cb6588"
            ]
        ]
    },
    {
        "id": "7e30ecb363cb6588",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "94c9e08acc9a8165",
        "name": "",
        "x": 1610,
        "y": 160,
        "wires": [
            [
                "b1c24ad9517a7f68"
            ]
        ]
    },
    {
        "id": "a1ef9c225010e078",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "KUB KWH TOTAL",
        "func": "var panel = msg.payload[0];\nvar power_meter = msg.payload[1];\nvar value = msg.payload[2];\nvar shift;\n\nvar now = new Date();\nvar currentHour = now.getHours();\nvar currentMinute = now.getMinutes();\nvar currentDay = now.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((now.getDate() - 1 - now.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = now.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = now.getFullYear();\n\nif (panel === \"kub\" && power_meter === \"DA_01\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_total_kwh_kubikal (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 210,
        "wires": [
            [
                "f302be8e27ea9c97"
            ]
        ]
    },
    {
        "id": "f302be8e27ea9c97",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "66bbdf3188c2f96b",
        "name": "",
        "x": 1650,
        "y": 210,
        "wires": [
            [
                "1bffbe121db18d66"
            ]
        ]
    },
    {
        "id": "ac9b8c1a14002e75",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Create SQL Query pm 220",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_pm220 ORDER BY id DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 360,
        "wires": [
            [
                "7e30ecb363cb6588",
                "c1b43cda34f8c85e",
                "5dd071d2df54bb6a",
                "500da3188674209b",
                "db35b5b8f7c99cf4",
                "d3036ff1944291b4",
                "a9b59caba456695a",
                "9e6eb878dfd3b793",
                "adb02c2cdbeb4396",
                "b1751f5effa1f005",
                "71429ca93f02afb2",
                "761156629011d5d7",
                "40034910fdcd2648",
                "afc3a2f5d04efc82",
                "2ee5d9a27cbafc38",
                "fd4654b8cb5acdad",
                "094282b73aa1e950",
                "ba1c824ce0d92531",
                "fbfbec78769cfb79",
                "0aed2f964512720d",
                "fe307eb8fcc412e5"
            ]
        ]
    },
    {
        "id": "b1c24ad9517a7f68",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 220,
        "wires": [
            [
                "f63217fd6be2dddc"
            ]
        ]
    },
    {
        "id": "0fc9c41c96fb9a16",
        "type": "inject",
        "z": "c8888449da0b5d56",
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
        "x": 140,
        "y": 450,
        "wires": [
            [
                "ac9b8c1a14002e75",
                "b496e34fa7e29bd5",
                "6e0954c085a58362"
            ]
        ]
    },
    {
        "id": "b8ac850a4aa66fcb",
        "type": "inject",
        "z": "c8888449da0b5d56",
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
        "crontab": "50 19 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 310,
        "wires": [
            []
        ]
    },
    {
        "id": "0024ccba085d8f78",
        "type": "inject",
        "z": "c8888449da0b5d56",
        "name": "Shift 1 Stop",
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
        "crontab": "00 07 * * *",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 350,
        "wires": [
            []
        ]
    },
    {
        "id": "acedf8f577e39fba",
        "type": "inject",
        "z": "c8888449da0b5d56",
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
        "x": 140,
        "y": 490,
        "wires": [
            [
                "ac9b8c1a14002e75",
                "b496e34fa7e29bd5",
                "6e0954c085a58362"
            ]
        ]
    },
    {
        "id": "919a0aa8b44720f2",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "94c9e08acc9a8165",
        "name": "",
        "x": 3380,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "f63217fd6be2dddc",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift LPF3 PM 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2990,
        "y": 220,
        "wires": [
            [
                "919a0aa8b44720f2"
            ]
        ]
    },
    {
        "id": "b496e34fa7e29bd5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Create SQL Query pm kub",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_kubikal ORDER BY id DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 460,
        "wires": [
            [
                "f302be8e27ea9c97"
            ]
        ]
    },
    {
        "id": "8f676c48be4c2bb1",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "66bbdf3188c2f96b",
        "name": "",
        "x": 3420,
        "y": 290,
        "wires": [
            []
        ]
    },
    {
        "id": "1bffbe121db18d66",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift PM KUB",
        "func": "var payload = msg.payload[0]; // Mengambil elemen pertama dari array payload\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.power_meter;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"DA_01\") { // Ubah kondisi sesuai kebutuhan\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_kub (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2810,
        "y": 270,
        "wires": [
            [
                "8f676c48be4c2bb1"
            ]
        ]
    },
    {
        "id": "6e0954c085a58362",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Create SQL Query pm 200",
        "func": "\nmsg.topic = \"SELECT * FROM tb_total_kwh_pm200 ORDER BY id DESC LIMIT 1\";\nreturn msg;\n\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 400,
        "wires": [
            [
                "c1b43cda34f8c85e",
                "5dd071d2df54bb6a",
                "500da3188674209b",
                "db35b5b8f7c99cf4",
                "d3036ff1944291b4",
                "a9b59caba456695a",
                "9e6eb878dfd3b793",
                "adb02c2cdbeb4396",
                "b1751f5effa1f005",
                "71429ca93f02afb2",
                "761156629011d5d7",
                "40034910fdcd2648",
                "afc3a2f5d04efc82",
                "2ee5d9a27cbafc38",
                "fd4654b8cb5acdad",
                "ba1c824ce0d92531",
                "094282b73aa1e950",
                "fbfbec78769cfb79",
                "0aed2f964512720d",
                "fe307eb8fcc412e5"
            ]
        ]
    },
    {
        "id": "cd1262b48e4864b5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "if (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 340,
        "wires": [
            [
                "3b49197b6a104b45",
                "7adc6199022f1217"
            ]
        ]
    },
    {
        "id": "a14593d6b0951c71",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 390,
        "wires": [
            [
                "ed5c5c0e69ab0710",
                "6742ea25547cb620"
            ]
        ]
    },
    {
        "id": "ad6374b71bec2b75",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 440,
        "wires": [
            [
                "cb3905dc9529ac9a",
                "89565f865d99daf6"
            ]
        ]
    },
    {
        "id": "7adc6199022f1217",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR1 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 340,
        "wires": [
            [
                "fbc13b230bace7d8"
            ]
        ]
    },
    {
        "id": "3b49197b6a104b45",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR1 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 350,
        "wires": [
            [
                "fbc13b230bace7d8"
            ]
        ]
    },
    {
        "id": "fbc13b230bace7d8",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "e94f313890e9ee6e",
        "name": "",
        "x": 3390,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "f94a8e3b4de26662",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "5488980f919ceaa4",
        "name": "",
        "x": 3390,
        "y": 390,
        "wires": [
            []
        ]
    },
    {
        "id": "15a68f5d484cd79c",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "bea9f0c488e86cb7",
        "name": "",
        "x": 3390,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "6742ea25547cb620",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR2 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 390,
        "wires": [
            [
                "f94a8e3b4de26662"
            ]
        ]
    },
    {
        "id": "ed5c5c0e69ab0710",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR2 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 400,
        "wires": [
            [
                "f94a8e3b4de26662"
            ]
        ]
    },
    {
        "id": "89565f865d99daf6",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR3 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 440,
        "wires": [
            [
                "15a68f5d484cd79c"
            ]
        ]
    },
    {
        "id": "cb3905dc9529ac9a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR3 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 450,
        "wires": [
            [
                "15a68f5d484cd79c"
            ]
        ]
    },
    {
        "id": "6d1376a439c6425e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 490,
        "wires": [
            [
                "a6af9bfcb68d122a",
                "f7e6cced05fe3ded"
            ]
        ]
    },
    {
        "id": "918535629cae1554",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 540,
        "wires": [
            [
                "6bd4b7f117f9f182",
                "ae96d1f529b07d6d"
            ]
        ]
    },
    {
        "id": "7d2e1163e8afa582",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 590,
        "wires": [
            [
                "fc5565ee23f547a4",
                "89eb8f47d7292d06"
            ]
        ]
    },
    {
        "id": "f7e6cced05fe3ded",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR4 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 490,
        "wires": [
            [
                "f60fc3a90ff7a099"
            ]
        ]
    },
    {
        "id": "a6af9bfcb68d122a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR4 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 500,
        "wires": [
            [
                "f60fc3a90ff7a099"
            ]
        ]
    },
    {
        "id": "f60fc3a90ff7a099",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "94666f05d9809eaf",
        "name": "",
        "x": 3390,
        "y": 490,
        "wires": [
            []
        ]
    },
    {
        "id": "9933ecfbb18df618",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "ff9678e117a171bb",
        "name": "",
        "x": 3390,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "548e59311e25c2f9",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "7b156dba9d601e6f",
        "name": "",
        "x": 3390,
        "y": 590,
        "wires": [
            []
        ]
    },
    {
        "id": "ae96d1f529b07d6d",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR5 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 540,
        "wires": [
            [
                "9933ecfbb18df618"
            ]
        ]
    },
    {
        "id": "6bd4b7f117f9f182",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR5 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 550,
        "wires": [
            [
                "9933ecfbb18df618"
            ]
        ]
    },
    {
        "id": "89eb8f47d7292d06",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR6 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 590,
        "wires": [
            [
                "548e59311e25c2f9"
            ]
        ]
    },
    {
        "id": "fc5565ee23f547a4",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR6 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 600,
        "wires": [
            [
                "548e59311e25c2f9"
            ]
        ]
    },
    {
        "id": "61f954ffadd73836",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 640,
        "wires": [
            [
                "f27357594772ca9d",
                "b3e407a9d9a2908c"
            ]
        ]
    },
    {
        "id": "1e1594d77e2374c3",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 690,
        "wires": [
            [
                "fefb1e9fb90ba26f",
                "b05d6a661fc50d77"
            ]
        ]
    },
    {
        "id": "167b2889560c939c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 740,
        "wires": [
            [
                "b1f7c88cf49b012a",
                "68e70e4a58ee2b11"
            ]
        ]
    },
    {
        "id": "b3e407a9d9a2908c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR7 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 640,
        "wires": [
            [
                "3dc52cc1609a67f2"
            ]
        ]
    },
    {
        "id": "f27357594772ca9d",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR7 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 650,
        "wires": [
            [
                "3dc52cc1609a67f2"
            ]
        ]
    },
    {
        "id": "3dc52cc1609a67f2",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "de0ec8eeea84b0f2",
        "name": "",
        "x": 3390,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "d5f43945278134ba",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "2c9685938e9c25d6",
        "name": "",
        "x": 3390,
        "y": 690,
        "wires": [
            []
        ]
    },
    {
        "id": "887b827955be28e7",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "efd4140388914319",
        "name": "",
        "x": 3390,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "b05d6a661fc50d77",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR8 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 690,
        "wires": [
            [
                "d5f43945278134ba"
            ]
        ]
    },
    {
        "id": "fefb1e9fb90ba26f",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR8 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 700,
        "wires": [
            [
                "d5f43945278134ba"
            ]
        ]
    },
    {
        "id": "68e70e4a58ee2b11",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR9 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 740,
        "wires": [
            [
                "887b827955be28e7"
            ]
        ]
    },
    {
        "id": "b1f7c88cf49b012a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR9 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 750,
        "wires": [
            [
                "887b827955be28e7"
            ]
        ]
    },
    {
        "id": "8b6236aeb73a4812",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 790,
        "wires": [
            [
                "472fcf38f3c0f59f",
                "b4e1d81cdc84b587"
            ]
        ]
    },
    {
        "id": "b053e0f1ec6b821b",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 840,
        "wires": [
            [
                "1aa38162d22af32c",
                "114d2df0617ab8b3"
            ]
        ]
    },
    {
        "id": "d0ca869098ba38f5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2790,
        "y": 890,
        "wires": [
            [
                "b89761c26dc3a597",
                "a54a241a73de10a3"
            ]
        ]
    },
    {
        "id": "b4e1d81cdc84b587",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR10 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 790,
        "wires": [
            [
                "cc5c5f7e1d06b3be"
            ]
        ]
    },
    {
        "id": "472fcf38f3c0f59f",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR10 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 800,
        "wires": [
            [
                "cc5c5f7e1d06b3be"
            ]
        ]
    },
    {
        "id": "cc5c5f7e1d06b3be",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "a6ad9d5aa68a2387",
        "name": "",
        "x": 3400,
        "y": 790,
        "wires": [
            []
        ]
    },
    {
        "id": "d963d68713cc04b0",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "0dc4edb4cc0a9dae",
        "name": "",
        "x": 3400,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "766f5a219746670a",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "9cc8a7a8732b9d23",
        "name": "",
        "x": 3400,
        "y": 890,
        "wires": [
            []
        ]
    },
    {
        "id": "114d2df0617ab8b3",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR11 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 840,
        "wires": [
            [
                "d963d68713cc04b0"
            ]
        ]
    },
    {
        "id": "1aa38162d22af32c",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR11 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 850,
        "wires": [
            [
                "d963d68713cc04b0"
            ]
        ]
    },
    {
        "id": "a54a241a73de10a3",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR12 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2980,
        "y": 890,
        "wires": [
            [
                "766f5a219746670a"
            ]
        ]
    },
    {
        "id": "b89761c26dc3a597",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CR12 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 3180,
        "y": 900,
        "wires": [
            [
                "766f5a219746670a"
            ]
        ]
    },
    {
        "id": "e2f93d400518f7e1",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 270,
        "wires": [
            [
                "f5b75a9615c3496e",
                "2c601b73f74b129b"
            ]
        ]
    },
    {
        "id": "2c601b73f74b129b",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift Roller Arm 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2120,
        "y": 270,
        "wires": [
            [
                "7f27314c3ca32166"
            ]
        ]
    },
    {
        "id": "f5b75a9615c3496e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift  Roller Arm 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2330,
        "y": 300,
        "wires": [
            [
                "7f27314c3ca32166"
            ]
        ]
    },
    {
        "id": "7f27314c3ca32166",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "cd6256241c4fabae",
        "name": "",
        "x": 2550,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "2cc39ab05fdaa722",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 350,
        "wires": [
            [
                "605bf4edf613ad49",
                "3010c1271c31b16e"
            ]
        ]
    },
    {
        "id": "3010c1271c31b16e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift BS2 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 350,
        "wires": [
            [
                "48cd84eea8ad4737"
            ]
        ]
    },
    {
        "id": "605bf4edf613ad49",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift BS2 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 360,
        "wires": [
            [
                "48cd84eea8ad4737"
            ]
        ]
    },
    {
        "id": "deb280e4c1a8d03a",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 430,
        "wires": [
            [
                "40604d1969654f46",
                "47a94ea80f9cd863"
            ]
        ]
    },
    {
        "id": "47a94ea80f9cd863",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift BS1 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 220\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 430,
        "wires": [
            [
                "fa0708c22d19ed21"
            ]
        ]
    },
    {
        "id": "40604d1969654f46",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift BS1 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM 200\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 440,
        "wires": [
            [
                "fa0708c22d19ed21"
            ]
        ]
    },
    {
        "id": "6ac7b588a4a96239",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 570,
        "wires": [
            [
                "d9c260f7e491e991",
                "5f24f40f73c86167"
            ]
        ]
    },
    {
        "id": "5f24f40f73c86167",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHAB 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 570,
        "wires": [
            [
                "8c5423432ed77b8e"
            ]
        ]
    },
    {
        "id": "d9c260f7e491e991",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHAB 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 580,
        "wires": [
            [
                "8c5423432ed77b8e"
            ]
        ]
    },
    {
        "id": "deacd6021457bdd8",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 650,
        "wires": [
            [
                "60d4a29a35728918",
                "84670ff8895cfef5"
            ]
        ]
    },
    {
        "id": "84670ff8895cfef5",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHCD 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-1F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 650,
        "wires": [
            [
                "5608a66f3cefa9f5"
            ]
        ]
    },
    {
        "id": "60d4a29a35728918",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHCD 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM-3F\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 660,
        "wires": [
            [
                "5608a66f3cefa9f5"
            ]
        ]
    },
    {
        "id": "be5b64b31b3e5174",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 830,
        "wires": [
            [
                "ad4ed93003e32b38",
                "7fb03db16db30f08"
            ]
        ]
    },
    {
        "id": "7fb03db16db30f08",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHSAC 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2110,
        "y": 830,
        "wires": [
            [
                "c094cc8454ad89ef"
            ]
        ]
    },
    {
        "id": "ad4ed93003e32b38",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHSAC 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2310,
        "y": 850,
        "wires": [
            [
                "c094cc8454ad89ef"
            ]
        ]
    },
    {
        "id": "20bcd7aaa8d9f61e",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 910,
        "wires": [
            [
                "4a6743f0fb11a3ea",
                "18c9fb6c243be99d"
            ]
        ]
    },
    {
        "id": "18c9fb6c243be99d",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHEF 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 910,
        "wires": [
            [
                "5a3a4f11efb00de2"
            ]
        ]
    },
    {
        "id": "4a6743f0fb11a3ea",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift CHEF 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 920,
        "wires": [
            [
                "5a3a4f11efb00de2"
            ]
        ]
    },
    {
        "id": "b3abdd412bf59f26",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "Parse Data ",
        "func": "\nif (msg.payload && msg.payload.length > 0) {\n    const result = msg.payload[0];\n    msg.parsedData = {\n        id: result.id,\n        date_time: result.date_time,\n        kwh: result.power_meter,\n        value: result.value\n    };\n    msg.payload = msg.parsedData;\n} else {\n    msg.payload = { error: \"No data found\" };\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1910,
        "y": 1040,
        "wires": [
            [
                "e399eb960f609eb9",
                "68366ae00ad5adf6"
            ]
        ]
    },
    {
        "id": "68366ae00ad5adf6",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift RET 220",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_220V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm220 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2100,
        "y": 1040,
        "wires": [
            [
                "7e907ef191a7111a"
            ]
        ]
    },
    {
        "id": "e399eb960f609eb9",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "PerShift RET 200",
        "func": "var payload = msg.payload;\nvar date_time = new Date(payload.date_time);\nvar power_meter = payload.kwh;\nvar value = payload.value;\nvar shift;\n\nvar currentHour = date_time.getHours();\nvar currentMinute = date_time.getMinutes();\nvar currentDay = date_time.getDate(); // Mendapatkan tanggal (1 - 31)\nvar currentWeek = Math.ceil((date_time.getDate() - 1 - date_time.getDay() + 1) / 7); // Menghitung nomor minggu\nvar currentMonth = date_time.toLocaleString('default', { month: 'long' }); // Nama bulan penuh, e.g., \"January\"\nvar currentYear = date_time.getFullYear();\n\nif (power_meter === \"PM_200V\") {\n    // Menentukan shift berdasarkan waktu\n    if ((currentHour > 7 || (currentHour === 7 && currentMinute >= 0)) &&\n        (currentHour < 19 || (currentHour === 19 && currentMinute <= 50))) {\n        shift = \"shift_1\";\n    } else {\n        shift = \"shift_2\";\n    }\n\n    // Query dengan tambahan kolom `day`\n    msg.topic = \"INSERT INTO tb_pershift_pm200 (power_meter, value, shift, day, week, month, year) \" +\n        \"VALUES ('\" + power_meter + \"', '\" + value + \"', '\" + shift + \"', '\" + currentDay +\n        \"', '\" + currentWeek + \"', '\" + currentMonth + \"', '\" + currentYear + \"');\";\n    return msg;\n} else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2300,
        "y": 1050,
        "wires": [
            [
                "7e907ef191a7111a"
            ]
        ]
    },
    {
        "id": "7e907ef191a7111a",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "ad586c95de209e28",
        "name": "",
        "x": 2500,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "5a3a4f11efb00de2",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "2df47be94f9509c2",
        "name": "",
        "x": 2530,
        "y": 910,
        "wires": [
            []
        ]
    },
    {
        "id": "c094cc8454ad89ef",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "8419412e00c26dc9",
        "name": "",
        "x": 2530,
        "y": 830,
        "wires": [
            []
        ]
    },
    {
        "id": "5608a66f3cefa9f5",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "d8e32c894dde12a8",
        "name": "",
        "x": 2530,
        "y": 650,
        "wires": [
            []
        ]
    },
    {
        "id": "8c5423432ed77b8e",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "4b883db3f93286cc",
        "name": "",
        "x": 2530,
        "y": 570,
        "wires": [
            []
        ]
    },
    {
        "id": "fa0708c22d19ed21",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "8250031a218afb87",
        "name": "",
        "x": 2520,
        "y": 430,
        "wires": [
            []
        ]
    },
    {
        "id": "48cd84eea8ad4737",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "98b61e957a070e20",
        "name": "",
        "x": 2520,
        "y": 350,
        "wires": [
            []
        ]
    },
    {
        "id": "8a2d81d5516b5562",
        "type": "function",
        "z": "c8888449da0b5d56",
        "name": "another facility",
        "func": "var array = msg.payload;\n\nif (array[0] === \"DP_QG_CT\") {\n    var sql = `INSERT INTO tb_panel_qg_ct (panel, code_power_meter, power_watt, energy_wh, current_a, voltage_v) \n                VALUES ('${array[0]}', '${array[1]}', '${array[2]}', '${array[3]}', '${array[4]}', '${array[5]}')`;\n\n    msg.topic = sql;\n    return msg;\n}else {\n    return null;\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 720,
        "y": 1280,
        "wires": [
            [
                "2059babba26b4458"
            ]
        ]
    },
    {
        "id": "2059babba26b4458",
        "type": "mysql",
        "z": "c8888449da0b5d56",
        "mydb": "ae6f5b8a36edc27d",
        "name": "",
        "x": 970,
        "y": 1280,
        "wires": [
            []
        ]
    },
    {
        "id": "cd6256241c4fabae",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_roller_arm",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "e94f313890e9ee6e",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_1",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "5488980f919ceaa4",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_2",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "bea9f0c488e86cb7",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_3",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "94666f05d9809eaf",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_4",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "ff9678e117a171bb",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_5",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "7b156dba9d601e6f",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_6",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "de0ec8eeea84b0f2",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_7",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "a6ad9d5aa68a2387",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_10",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "2c9685938e9c25d6",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_8",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "efd4140388914319",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_9",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "0dc4edb4cc0a9dae",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_11",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "9cc8a7a8732b9d23",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_common_rail_12",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "98b61e957a070e20",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_balance_shaft_1",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "8250031a218afb87",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_balance_shaft_2",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "4b883db3f93286cc",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_ab",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "d8e32c894dde12a8",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_cd",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "ad586c95de209e28",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_retainer",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "2df47be94f9509c2",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_ef",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "8419412e00c26dc9",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_camphousing_sac",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "dd07523e193c906c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "database_tps_montiv",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "f18e648680d8d15a",
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
        "width": 5,
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
        "width": 13,
        "collapse": false,
        "className": ""
    },
    {
        "id": "88d46435f2237a01",
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
        "id": "94c9e08acc9a8165",
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
        "id": "ae6f5b8a36edc27d",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "db_energy_facility",
        "tz": "",
        "charset": "UTF8"
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
