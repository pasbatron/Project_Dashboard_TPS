[
    {
        "id": "057d5987010553b7",
        "type": "debug",
        "z": "42e46494b8beb695",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 180,
        "wires": []
    },
    {
        "id": "9c41362fba15daa5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "query_sql",
        "func": "var line\nvar target\nvar aktual\nvar loading_time\nvar efisiensi\nvar delay\nvar status\nvar cycle_time\nvar time_trouble\nvar name_hikitori\nvar cycle_time\nvar time_begin\nvar time_finish\nvar loading_time\nvar status_hikitori\nvar name_product\nvar andon\nvar time_trouble_quality\n\n\nif (msg.payload[0] == \"0110\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0111\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0112\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0113\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0114\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0115\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0116\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0117\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status_hikitori) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\n\nelse if (msg.payload[0] == \"1\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_1(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n\n} else if (msg.payload[0] == \"2\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_2(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"3\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_3(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"4\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_4(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"5\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_5(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"6\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_6(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"7\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_7(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"8\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_8(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"9\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_9(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"10\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_10(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"11\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_11(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"12\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_common_rail_12(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"13\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_ab(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"14\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_cd(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"15\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_e(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"16\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_assy_a(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"17\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_assy_b(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"18\") {\n\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_housing_assy_c(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n\n} else if (msg.payload[0] == \"19\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_1a(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"20\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_1b(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"21\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_1c(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"22\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_2_3_d05e(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"23\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_2(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"24\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_3(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"25\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_cam_cap_4(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"26\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_roller_arm_a(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"27\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_roller_arm_b(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"28\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_balance_shaft(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"29\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_retainer(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"30\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_inlet_water(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"31\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_spacer_and_drive_gear(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (msg.payload[0] == \"32\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_inlet_housing_water(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n} else if (msg.payload[0] == \"33\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_connector_head_cover(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n} else if (msg.payload[0] == \"33\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_hla(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n} else if (msg.payload[0] == \"33\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_inspect_packing_imv(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n} else if (msg.payload[0] == \"33\") {\n    line = msg.payload[0]\n    name_product = msg.payload[1]\n    target = msg.payload[2]\n    aktual = msg.payload[3]\n    loading_time = msg.payload[4]\n    efisiensi = msg.payload[5]\n    delay = msg.payload[6]\n    cycle_time = msg.payload[7]\n    status = msg.payload[8]\n    time_trouble = msg.payload[9]\n    time_trouble_quality = msg.payload[10]\n    andon = msg.payload[11]\n    // query__________________________\n\n    msg.topic = \"INSERT INTO table_monitoring_expacking_common_rail(id, line, name_product, target, aktual, loading_time, efisiensi, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line + \"', '\" + name_product + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n}\nelse {\n    msg.topic = \"INSERT INTO table_spam(id, data1, data2, data3, data4, data5, data6, data7, data8, data9) values(null, '\" + msg.payload[0] + \"', '\" + msg.payload[1] + \"', '\" + msg.payload[2] + \"', '\" + msg.payload[3] + \"', '\" + msg.payload[4] + \"', '\" + msg.payload[5] + \"','\" + msg.payload[6] + \"', '\" + msg.payload[7] + \"', '\" + msg.payload[8] + \"');\"\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 380,
        "y": 180,
        "wires": [
            [
                "d64186578002398f"
            ]
        ]
    },
    {
        "id": "daf379af17a1f571",
        "type": "string",
        "z": "42e46494b8beb695",
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
                        "value": "30"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 1810,
        "y": 1180,
        "wires": [
            [
                "9c41362fba15daa5",
                "057d5987010553b7",
                "d5e0a592627f784a",
                "281281c5d1161afe",
                "dc7afae3062151ee",
                "a5b8b1714a7b0b8e",
                "b480588be6e95961",
                "6e31966245aacdf6",
                "28b9e8b62655f596",
                "e36bc4cb8b6c04d1",
                "146cc14e3bbf87c6",
                "0f893d0a994cd850",
                "ac6d0a1099170edc",
                "cf2b5c8217a5d49c",
                "f5f2d24d1478f9e3",
                "c0cb35c285718f51",
                "14f161665428fb73",
                "1b82705231eab2df",
                "379a20c8e08c6864",
                "75c9b33c583f9318",
                "5186030dc40b4575",
                "d55a72c9b9cf3530",
                "ab2b54c8864834cd",
                "f512505c0339b745",
                "5e0c51f7969d9c54",
                "915f5c3c9f8d542c",
                "67e4d25ac66c5e62",
                "e2e134c5c37cf105",
                "f24979efd15a4ae6",
                "ca5e70f104191d5d",
                "6e31b76ebaeea1fb",
                "57d37a566530ddb7",
                "1b3fa3bc774c4ea1",
                "86e28fa87a36830a",
                "bd4546e2a71fccb0",
                "12b53bbf734f777d",
                "4101c459617140fe",
                "4aa5fe2310e82756",
                "1b373b43810c3b74",
                "6d14b6f5126f90b8",
                "7b28c37446b787d9",
                "3d13b751778eccdd",
                "0c267e6f5fdffda1",
                "3dca34be9030ef00",
                "9d40b5eb85952738",
                "d241afb3cb9be386",
                "6cdf5bae486580fe",
                "98ee46d75eb3e625",
                "8be16bb14dff98f9",
                "79ff65acd04b50c8",
                "6be7a2d258184054",
                "c76256b3e176903d",
                "66eae49cd1066323",
                "f0ad45326549d97b",
                "b602778bbde5504d",
                "3f533f6222032b49",
                "c5db6608faaf0473",
                "7dfa4f335ecf618e",
                "3c6611cb61c885c3",
                "7bfbd9f004c28408",
                "cf7565002f1cf532",
                "848c08aaafe5dad5",
                "eaf1c53bac0138fb",
                "f6b7e9114cb9e7d7",
                "96fc3f9e9ab774d5",
                "2eb330443a9af22f",
                "4043422182988a9f",
                "abe427ca19bbb46e",
                "14e85bfe0425f5a4",
                "4a4753340361a3b8",
                "f13d751660ea077b",
                "6ace24099b28c43b",
                "98f19ba68e64bb17",
                "5f9ed871b388bd92",
                "cc2b35a77a2d396f",
                "e0ab2b159152d767",
                "d067f8afee4554d0",
                "e7a5fb2eddca2fa3",
                "89d8de51516b35d1",
                "e2d313bf1a766e06",
                "31c2242d2fd133c8",
                "3ed17d75aa5aaafb",
                "1c88172f5fbf0bb6",
                "93faee26fb3fd1c0",
                "cecb72679b401e63",
                "fb1aa014932aa6cc",
                "44c1d8de1e1f588e",
                "849011a848227bbb",
                "e7c156f318443ce3",
                "e9bac0c101cc9f81",
                "dc197b1a97cd751b",
                "e945ae76e6294ec7",
                "b468194a87f5033e",
                "93e77db3c86225c9",
                "08a2d17ab9b51f29",
                "18c3cbe1afea5b35",
                "edca68bf4a017dd6",
                "fbd1627b3a4e8355",
                "ef8b05adfae01939",
                "56009469e0051e15",
                "0a502312526572f1",
                "b6cb19613370acff",
                "6801c32ac49e8c46",
                "2f36b1bbadbeeffc",
                "c9755da4719a3621",
                "18e8700a57f40256",
                "63223fc61396ba77",
                "7dd9ea9e2150b60e",
                "9f0564c8c039c139",
                "2b87ec3e4d634378",
                "18011b90fe423592",
                "445291bbba42473e",
                "35916f62295bb8d4",
                "f8dfaddc976f1873",
                "f358b70259637da3",
                "b7ff32e95e0d38d5",
                "3f8c4726230a4384",
                "dfeb1d468340bd27",
                "d18a42e0b1a85270",
                "a86455c6cb4573b8",
                "55200475b4196146",
                "f0da4d082f69d5e5",
                "099012a644f8e81d",
                "02758711f869ac7a",
                "d176e24a55fbaede",
                "658f33d2c8e2892b",
                "22177ebb7fd89226",
                "f4d5774920fb173c",
                "8f12e1545336912e",
                "0aaf6db55fc81f0d",
                "5c550bb685f86727",
                "7fd5c001a8937f95",
                "2b4e902903bc7420",
                "0f0fd4a2f6c78e90",
                "b9f8cd5296783713",
                "9a15ccfc955b556a",
                "ad48c4e27090075c",
                "84e3d5c5966b1597",
                "0825dc80a5bdfc6c",
                "bdb59753e0335dee",
                "fad01ee42ff89e79",
                "a35f2a87c98cb0ac",
                "89d0aa0c7bff7047",
                "e24391e84a2a39d7",
                "e247dc5a8b8db027",
                "ce90afa6b8ec6a4e",
                "7a60f67a9645ffa0",
                "1f40a4ac0aff78cc",
                "eabc3ce6a8923cbe",
                "557b8662a650a316",
                "f2c9d3601f969ef8",
                "9b0374bf346e524f",
                "276dda302600dc88",
                "8a35270d38c66786",
                "3d7b7def96c3885b",
                "f6d47b191c32933d",
                "2b720cf72ecd973d",
                "28a06fb317f795e3",
                "06d8b08bde293079",
                "20279939ec489837",
                "f5b5d0c94e503a69",
                "9831204433be8e09",
                "4164bf71d3ef3781",
                "40a87cd517802b1f",
                "4f41c7ebb4d31224",
                "37d44f07a2e77ffa",
                "e1d8bb6512495ba8",
                "2f9e78057ea38379",
                "220e5fef722bb0ec",
                "7d8440fb952e81d7",
                "d84efba9ce7d79e6",
                "1f34cef0b465ba94",
                "2464ab4d3d993033",
                "6bb5290968bd6dc9",
                "7a13b20bb4448873",
                "45643679589c5a5f",
                "fb329e7d333cc37a",
                "f1970fa888277a87",
                "59a942c408609bd0",
                "14d05425259ac9b8",
                "50d7441977b6fbf2",
                "63e1e069e3a92215",
                "f8d39be7994a7807",
                "7473ccfba8cf96d2",
                "e4dfec317f6d3ffb",
                "f468d2b53585eea3",
                "d4df9cbefe73f6a9",
                "ac4140f640eb7822",
                "59c43873800c81f8",
                "5f44ecb90c696e48",
                "e0f047c477318660",
                "389e2c5b8ab416f0",
                "5911a4309933c3c3",
                "8c0c770228b515b2",
                "320112d1316eb652",
                "6428dc9aa0babaed",
                "8b0018440305e7b0",
                "a1694294fb285147",
                "cd7d4f1617f431b8",
                "cef24e04b9a51090",
                "fc28d341633dfce8",
                "712d7cde5539205f",
                "58811937f9210906",
                "2a996ee1281057c2",
                "cbafb160c3e72cdc",
                "7e3c4376dcaa4fc1",
                "42939d0e3a956f5f",
                "4593805403372337",
                "1ba12d40308b4083",
                "acb1d3f45b108781",
                "621ba41f69906088",
                "db53b4283ad71345",
                "efa965dc0324c984",
                "a5fd4aeb3ecc92fd",
                "461bf306df25d8f3",
                "d82398e97da30558",
                "d9489e0c9e0450ca"
            ]
        ]
    },
    {
        "id": "d64186578002398f",
        "type": "mysql",
        "z": "42e46494b8beb695",
        "mydb": "dd07523e193c906c",
        "name": "",
        "x": 510,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "4fe9ad9929838ceb",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "",
        "info": "var line\nvar target\nvar aktual\nvar loading_time\nvar efisiensi\nvar delay\nvar status\nvar cycle_time\nvar time_trouble\n\nvar name_hikitori\nvar cycle_time\nvar time_begin\nvar time_finish\nvar loading_time\nvar status_hikitori\n\n\nif (msg.payload[0] == \"0110\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0111\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0112\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0113\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0114\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0115\"){\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0116\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0117\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\n\nelse if(msg.payload[0] == \"01\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n\n\n\n}else if(msg.payload[0] == \"02\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"03\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"04\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"05\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"06\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"07\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"08\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"09\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"010\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"011\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"012\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"013\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"014\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"015\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"016\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"017\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018A\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018B\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\n\n\n\nelse{\n    msg.topic = \"INSERT INTO table_spam(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\nreturn msg;",
        "x": 820,
        "y": 180,
        "wires": []
    },
    {
        "id": "7a52fd7cdd37333e",
        "type": "serial in",
        "z": "42e46494b8beb695",
        "name": "",
        "serial": "b3669379a658aa82",
        "x": 210,
        "y": 180,
        "wires": [
            [
                "daf379af17a1f571"
            ]
        ]
    },
    {
        "id": "d5e0a592627f784a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "281281c5d1161afe",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "dc7afae3062151ee",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "a5b8b1714a7b0b8e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "b480588be6e95961",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "e36bc4cb8b6c04d1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "146cc14e3bbf87c6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "0f893d0a994cd850",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "ac6d0a1099170edc",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "cf2b5c8217a5d49c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "f5f2d24d1478f9e3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "c0cb35c285718f51",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "14f161665428fb73",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing A",
        "func": "if (msg.payload[0] == \"13A\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "1b82705231eab2df",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing B",
        "func": "if (msg.payload[0] == \"13B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "379a20c8e08c6864",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing C",
        "func": "if (msg.payload[0] == \"14A\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "75c9b33c583f9318",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing D",
        "func": "if (msg.payload[0] == \"14B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "5186030dc40b4575",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing E NR",
        "func": "if (msg.payload[0] == \"15A\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "d55a72c9b9cf3530",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing E D05E",
        "func": "if (msg.payload[0] == \"15B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "ab2b54c8864834cd",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Housing Assy A",
        "func": "if (msg.payload[0] == \"16\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "f512505c0339b745",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Housing Assy B",
        "func": "if (msg.payload[0] == \"17\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "5e0c51f7969d9c54",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Housing Assy C NR",
        "func": "if (msg.payload[0] == \"18A\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "915f5c3c9f8d542c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Housing Assy C D05E",
        "func": "if (msg.payload[0] == \"18B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "67e4d25ac66c5e62",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1A",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "e2e134c5c37cf105",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "f24979efd15a4ae6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1C NR",
        "func": "if (msg.payload[0] == \"21A\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 340,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "6e31b76ebaeea1fb",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 2 & 3 D05E",
        "func": "if (msg.payload[0] == \"22\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "57d37a566530ddb7",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 2",
        "func": "if (msg.payload[0] == \"23\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "1b3fa3bc774c4ea1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 3",
        "func": "if (msg.payload[0] == \"24\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1380,
        "wires": [
            []
        ]
    },
    {
        "id": "86e28fa87a36830a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 4",
        "func": "if (msg.payload[0] == \"25\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "bd4546e2a71fccb0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Spacer Drive Gear",
        "func": "if (msg.payload[0] == \"26\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "12b53bbf734f777d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Retainer",
        "func": "if (msg.payload[0] == \"27\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 1500,
        "wires": [
            []
        ]
    },
    {
        "id": "4101c459617140fe",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Inlet Water",
        "func": "if (msg.payload[0] == \"28\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "4aa5fe2310e82756",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Roller Arm A",
        "func": "if (msg.payload[0] == \"29\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 1580,
        "wires": [
            []
        ]
    },
    {
        "id": "1b373b43810c3b74",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Roller Arm B",
        "func": "if (msg.payload[0] == \"30\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 1620,
        "wires": [
            []
        ]
    },
    {
        "id": "6d14b6f5126f90b8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Balance Shaft",
        "func": "if (msg.payload[0] == \"31\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 1660,
        "wires": [
            []
        ]
    },
    {
        "id": "7b28c37446b787d9",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Adjuster Valve HLA",
        "func": "if (msg.payload[0] == \"32\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 1700,
        "wires": [
            []
        ]
    },
    {
        "id": "3d13b751778eccdd",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Export Packing Common Rail",
        "func": "if (msg.payload[0] == \"33\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 1740,
        "wires": [
            []
        ]
    },
    {
        "id": "0c267e6f5fdffda1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Export Packing IMV",
        "func": "if (msg.payload[0] == \"34\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 1780,
        "wires": [
            []
        ]
    },
    {
        "id": "6e31966245aacdf6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "28b9e8b62655f596",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "3dca34be9030ef00",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "9d40b5eb85952738",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "ca5e70f104191d5d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1C D05E",
        "func": "if (msg.payload[0] == \"21B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 1260,
        "wires": [
            []
        ]
    },
    {
        "id": "d241afb3cb9be386",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "6cdf5bae486580fe",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "98ee46d75eb3e625",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "8be16bb14dff98f9",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "79ff65acd04b50c8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 770,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "6be7a2d258184054",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "c76256b3e176903d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "66eae49cd1066323",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 780,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "f0ad45326549d97b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Machining Cam Housing A",
        "func": "if (msg.payload[0] == \"13A\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "b602778bbde5504d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Machining Cam Housing B",
        "func": "if (msg.payload[0] == \"13B\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "3f533f6222032b49",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Machining Cam Housing C",
        "func": "if (msg.payload[0] == \"14A\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "c5db6608faaf0473",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Machining Cam Housing D",
        "func": "if (msg.payload[0] == \"14B\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "7dfa4f335ecf618e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Machining Cam Housing E NR",
        "func": "if (msg.payload[0] == \"15A\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 860,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "3c6611cb61c885c3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Machining Cam Housing E D05E",
        "func": "if (msg.payload[0] == \"15B\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 860,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "7bfbd9f004c28408",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Housing Assy A",
        "func": "if (msg.payload[0] == \"16\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "cf7565002f1cf532",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Housing Assy B",
        "func": "if (msg.payload[0] == \"17\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 830,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "848c08aaafe5dad5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Housing Assy C NR",
        "func": "if (msg.payload[0] == \"18A\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "eaf1c53bac0138fb",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Housing Assy C D05E",
        "func": "if (msg.payload[0] == \"18B\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 850,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "f6b7e9114cb9e7d7",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 1A",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 850,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "96fc3f9e9ab774d5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = Number(msg.payload[2])\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 850,
        "y": 1180,
        "wires": [
            [
                "b14b178d3f7ee84b"
            ]
        ]
    },
    {
        "id": "2eb330443a9af22f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 1C NR",
        "func": "if (msg.payload[0] == \"21A\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 860,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "abe427ca19bbb46e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 2 & 3 D05E",
        "func": "if (msg.payload[0] == \"22\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 880,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "14e85bfe0425f5a4",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 2",
        "func": "if (msg.payload[0] == \"23\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "4a4753340361a3b8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 3",
        "func": "if (msg.payload[0] == \"24\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 1380,
        "wires": [
            []
        ]
    },
    {
        "id": "f13d751660ea077b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 4",
        "func": "if (msg.payload[0] == \"25\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "6ace24099b28c43b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Spacer Drive Gear",
        "func": "if (msg.payload[0] == \"26\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "98f19ba68e64bb17",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Retainer",
        "func": "if (msg.payload[0] == \"27\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1500,
        "wires": [
            []
        ]
    },
    {
        "id": "5f9ed871b388bd92",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Inlet Water",
        "func": "if (msg.payload[0] == \"28\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "cc2b35a77a2d396f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Roller Arm A",
        "func": "if (msg.payload[0] == \"29\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 800,
        "y": 1580,
        "wires": [
            []
        ]
    },
    {
        "id": "e0ab2b159152d767",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Roller Arm B",
        "func": "if (msg.payload[0] == \"30\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 800,
        "y": 1620,
        "wires": [
            []
        ]
    },
    {
        "id": "d067f8afee4554d0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Balance Shaft",
        "func": "if (msg.payload[0] == \"31\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 800,
        "y": 1660,
        "wires": [
            []
        ]
    },
    {
        "id": "e7a5fb2eddca2fa3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Adjuster Valve HLA",
        "func": "if (msg.payload[0] == \"32\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1700,
        "wires": [
            []
        ]
    },
    {
        "id": "89d8de51516b35d1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Export Packing Common Rail",
        "func": "if (msg.payload[0] == \"33\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 850,
        "y": 1740,
        "wires": [
            []
        ]
    },
    {
        "id": "e2d313bf1a766e06",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Export Packing IMV",
        "func": "if (msg.payload[0] == \"34\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 1780,
        "wires": [
            []
        ]
    },
    {
        "id": "4043422182988a9f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Target Product Cam Shaft Cam Housing 1C D05E",
        "func": "if (msg.payload[0] == \"21B\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"target\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 870,
        "y": 1260,
        "wires": [
            []
        ]
    },
    {
        "id": "31c2242d2fd133c8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "3ed17d75aa5aaafb",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "1c88172f5fbf0bb6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "93faee26fb3fd1c0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "cecb72679b401e63",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "fb1aa014932aa6cc",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "44c1d8de1e1f588e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "849011a848227bbb",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "e7c156f318443ce3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing A",
        "func": "if (msg.payload[0] == \"13A\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "93e77db3c86225c9",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing B",
        "func": "if (msg.payload[0] == \"13B\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "08a2d17ab9b51f29",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing C",
        "func": "if (msg.payload[0] == \"14A\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "18c3cbe1afea5b35",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing D",
        "func": "if (msg.payload[0] == \"14B\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "edca68bf4a017dd6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing E NR",
        "func": "if (msg.payload[0] == \"15A\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1380,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "fbd1627b3a4e8355",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Machining Cam Housing E D05E",
        "func": "if (msg.payload[0] == \"15B\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1380,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "ef8b05adfae01939",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Housing Assy A",
        "func": "if (msg.payload[0] == \"16\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "56009469e0051e15",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Housing Assy B",
        "func": "if (msg.payload[0] == \"17\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "0a502312526572f1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Housing Assy C NR",
        "func": "if (msg.payload[0] == \"18A\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "b6cb19613370acff",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Housing Assy C D05E",
        "func": "if (msg.payload[0] == \"18B\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1370,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "6801c32ac49e8c46",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 1A",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1370,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "2f36b1bbadbeeffc",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = Number(msg.payload[3])\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1370,
        "y": 1180,
        "wires": [
            [
                "b14b178d3f7ee84b"
            ]
        ]
    },
    {
        "id": "c9755da4719a3621",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 1C NR",
        "func": "if (msg.payload[0] == \"21A\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1380,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "18e8700a57f40256",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 2 & 3 D05E",
        "func": "if (msg.payload[0] == \"22\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1400,
        "y": 1300,
        "wires": [
            []
        ]
    },
    {
        "id": "63223fc61396ba77",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 2",
        "func": "if (msg.payload[0] == \"23\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 1340,
        "wires": [
            []
        ]
    },
    {
        "id": "7dd9ea9e2150b60e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 3",
        "func": "if (msg.payload[0] == \"24\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 1380,
        "wires": [
            []
        ]
    },
    {
        "id": "9f0564c8c039c139",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 4",
        "func": "if (msg.payload[0] == \"25\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 1420,
        "wires": [
            []
        ]
    },
    {
        "id": "2b87ec3e4d634378",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Spacer Drive Gear",
        "func": "if (msg.payload[0] == \"26\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 1460,
        "wires": [
            []
        ]
    },
    {
        "id": "18011b90fe423592",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Retainer",
        "func": "if (msg.payload[0] == \"27\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1310,
        "y": 1500,
        "wires": [
            []
        ]
    },
    {
        "id": "445291bbba42473e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Inlet Water",
        "func": "if (msg.payload[0] == \"28\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1310,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "35916f62295bb8d4",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Roller Arm A",
        "func": "if (msg.payload[0] == \"29\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1320,
        "y": 1580,
        "wires": [
            []
        ]
    },
    {
        "id": "f8dfaddc976f1873",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Roller Arm B",
        "func": "if (msg.payload[0] == \"30\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1320,
        "y": 1620,
        "wires": [
            []
        ]
    },
    {
        "id": "f358b70259637da3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Balance Shaft",
        "func": "if (msg.payload[0] == \"31\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1320,
        "y": 1660,
        "wires": [
            []
        ]
    },
    {
        "id": "b7ff32e95e0d38d5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Adjuster Valve HLA",
        "func": "if (msg.payload[0] == \"32\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 1700,
        "wires": [
            []
        ]
    },
    {
        "id": "3f8c4726230a4384",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Export Packing Common Rail",
        "func": "if (msg.payload[0] == \"33\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1370,
        "y": 1740,
        "wires": [
            []
        ]
    },
    {
        "id": "dfeb1d468340bd27",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Export Packing IMV",
        "func": "if (msg.payload[0] == \"34\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1340,
        "y": 1780,
        "wires": [
            []
        ]
    },
    {
        "id": "a5fd4aeb3ecc92fd",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product Cam Shaft Cam Housing 1C D05E",
        "func": "if (msg.payload[0] == \"21B\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1390,
        "y": 1260,
        "wires": [
            []
        ]
    },
    {
        "id": "e9bac0c101cc9f81",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "dc197b1a97cd751b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "e945ae76e6294ec7",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "b468194a87f5033e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Aktual Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "099012a644f8e81d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "02758711f869ac7a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time  Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "d176e24a55fbaede",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "658f33d2c8e2892b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "22177ebb7fd89226",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "f4d5774920fb173c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "8f12e1545336912e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "d18a42e0b1a85270",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "a86455c6cb4573b8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "55200475b4196146",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "f0da4d082f69d5e5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "b9f8cd5296783713",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "9a15ccfc955b556a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "ad48c4e27090075c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "84e3d5c5966b1597",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "0825dc80a5bdfc6c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "bdb59753e0335dee",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "5c550bb685f86727",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "7fd5c001a8937f95",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "2b4e902903bc7420",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "0f0fd4a2f6c78e90",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2360,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "0aaf6db55fc81f0d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Loading Time Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1840,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "e247dc5a8b8db027",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "ce90afa6b8ec6a4e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "7a60f67a9645ffa0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "1f40a4ac0aff78cc",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "eabc3ce6a8923cbe",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "557b8662a650a316",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "fad01ee42ff89e79",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "a35f2a87c98cb0ac",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "89d0aa0c7bff7047",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "e24391e84a2a39d7",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 250,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "f2c9d3601f969ef8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "9b0374bf346e524f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Delay Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"delay\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 260,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "28a06fb317f795e3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "06d8b08bde293079",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "20279939ec489837",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "f5b5d0c94e503a69",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "9831204433be8e09",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "4164bf71d3ef3781",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "8a35270d38c66786",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "3d7b7def96c3885b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "f6d47b191c32933d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "2b720cf72ecd973d",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "40a87cd517802b1f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "4f41c7ebb4d31224",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cycle Time Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"cycle_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "276dda302600dc88",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2370,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "413f4c8daf2b414a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"efisiensi\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2370,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "7d8440fb952e81d7",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "d84efba9ce7d79e6",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "1f34cef0b465ba94",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "2464ab4d3d993033",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "6bb5290968bd6dc9",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "7a13b20bb4448873",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "37d44f07a2e77ffa",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "e1d8bb6512495ba8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "2f9e78057ea38379",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "220e5fef722bb0ec",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "45643679589c5a5f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "fb329e7d333cc37a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Status Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"status\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1300,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "63e1e069e3a92215",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "f8d39be7994a7807",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble  Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "7473ccfba8cf96d2",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "e4dfec317f6d3ffb",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "f468d2b53585eea3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "d4df9cbefe73f6a9",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "f1970fa888277a87",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "59a942c408609bd0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "14d05425259ac9b8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "50d7441977b6fbf2",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "ac4140f640eb7822",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "59c43873800c81f8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"time_trouble\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1800,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "8c0c770228b515b2",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "320112d1316eb652",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "6428dc9aa0babaed",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "8b0018440305e7b0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "a1694294fb285147",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "cd7d4f1617f431b8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "5f44ecb90c696e48",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "e0f047c477318660",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "389e2c5b8ab416f0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "5911a4309933c3c3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "cef24e04b9a51090",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "fc28d341633dfce8",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Time Trouble Quality Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"time_trouble_quality\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2340,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "7e3c4376dcaa4fc1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR5",
        "func": "if (msg.payload[0] == \"5\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "42939d0e3a956f5f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR6",
        "func": "if (msg.payload[0] == \"6\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "4593805403372337",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR7",
        "func": "if (msg.payload[0] == \"7\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "1ba12d40308b4083",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR8",
        "func": "if (msg.payload[0] == \"8\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2220,
        "wires": [
            []
        ]
    },
    {
        "id": "acb1d3f45b108781",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR9",
        "func": "if (msg.payload[0] == \"9\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2260,
        "wires": [
            []
        ]
    },
    {
        "id": "621ba41f69906088",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR10",
        "func": "if (msg.payload[0] == \"10\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2300,
        "wires": [
            []
        ]
    },
    {
        "id": "712d7cde5539205f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR1",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 1940,
        "wires": [
            []
        ]
    },
    {
        "id": "58811937f9210906",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR2",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "2a996ee1281057c2",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR3",
        "func": "if (msg.payload[0] == \"3\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2020,
        "wires": [
            []
        ]
    },
    {
        "id": "cbafb160c3e72cdc",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR4",
        "func": "if (msg.payload[0] == \"4\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2060,
        "wires": [
            []
        ]
    },
    {
        "id": "db53b4283ad71345",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR11",
        "func": "if (msg.payload[0] == \"11\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2340,
        "wires": [
            []
        ]
    },
    {
        "id": "efa965dc0324c984",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Andon Product CR12",
        "func": "if (msg.payload[0] == \"12\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"andon\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2860,
        "y": 2380,
        "wires": [
            []
        ]
    },
    {
        "id": "b14b178d3f7ee84b",
        "type": "ui_chart",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "622cc6c1b352cad6",
        "order": 2,
        "width": 13,
        "height": 7,
        "label": "Cam Shaft Cam Housing 1B",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "cubic",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "500",
        "removeOlder": "50",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#323c43",
            "#6091d2",
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
        "x": 2460,
        "y": 1120,
        "wires": [
            []
        ]
    },
    {
        "id": "70bdb22df64daaa7",
        "type": "ui_button",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "622cc6c1b352cad6",
        "order": 10,
        "width": 2,
        "height": 1,
        "passthru": false,
        "label": "Clear",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "[]",
        "payloadType": "json",
        "topic": "topic",
        "topicType": "msg",
        "x": 2290,
        "y": 1080,
        "wires": [
            [
                "b14b178d3f7ee84b"
            ]
        ]
    },
    {
        "id": "04d7530b0fae4182",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Random Temperatrures",
        "func": "msg.payload = Math.random() * 100\nmsg.topic = \"Aktual\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2510,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "195b70ff38d2d93f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Random Temperatrures",
        "func": "msg.payload = Math.random() * 100\nmsg.topic = \"target\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2510,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "3ab5e123c94c6ddf",
        "type": "ui_gauge",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "622cc6c1b352cad6",
        "order": 3,
        "width": 6,
        "height": 5,
        "gtype": "gage",
        "title": "Efisiensi(%)",
        "label": "(%)",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#ff0000",
            "#e6e600",
            "#00b500"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 2410,
        "y": 1160,
        "wires": []
    },
    {
        "id": "461bf306df25d8f3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Efisiensi Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = Number(msg.payload[5])/10\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2120,
        "y": 1160,
        "wires": [
            [
                "3ab5e123c94c6ddf"
            ]
        ]
    },
    {
        "id": "7bad72f54d91abd5",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "622cc6c1b352cad6",
        "order": 4,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Nama Part",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 2410,
        "y": 1200,
        "wires": []
    },
    {
        "id": "7586d9bcb02e1257",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "622cc6c1b352cad6",
        "order": 6,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Loading Time",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 2420,
        "y": 1240,
        "wires": []
    },
    {
        "id": "8a78f4b204d06d52",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "622cc6c1b352cad6",
        "order": 8,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "Delay",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 2390,
        "y": 1280,
        "wires": []
    },
    {
        "id": "d82398e97da30558",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = Number(msg.payload[1])\n    msg.topic = \"aktual\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2110,
        "y": 1200,
        "wires": [
            [
                "7bad72f54d91abd5"
            ]
        ]
    },
    {
        "id": "d9489e0c9e0450ca",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Nama Product Cam Shaft Cam Housing 1B",
        "func": "if (msg.payload[0] == \"20\") {\n    msg.payload = Number(msg.payload[4])\n    msg.topic = \"loading_time\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2110,
        "y": 1240,
        "wires": [
            [
                "7586d9bcb02e1257"
            ]
        ]
    },
    {
        "id": "dd07523e193c906c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3306",
        "db": "tps",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "b3669379a658aa82",
        "type": "serial-port",
        "serialport": "COM3",
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
        "responsetimeout": "10000"
    },
    {
        "id": "622cc6c1b352cad6",
        "type": "ui_group",
        "name": "Target-Aktual",
        "tab": "a306dfc760ae09c0",
        "order": 1,
        "disp": true,
        "width": 30,
        "collapse": false,
        "className": ""
    },
    {
        "id": "a306dfc760ae09c0",
        "type": "ui_tab",
        "name": "Monitoring Cam Shaft Cam Housing 1B",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    }
]
