[
    {
        "id": "4fe9ad9929838ceb",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "",
        "info": "var line\nvar target\nvar aktual\nvar loading_time\nvar efisiensi\nvar delay\nvar status\nvar cycle_time\nvar time_trouble\n\nvar name_hikitori\nvar cycle_time\nvar time_begin\nvar time_finish\nvar loading_time\nvar status_hikitori\n\n\nif (msg.payload[0] == \"0110\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0111\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0112\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0113\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0114\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0115\"){\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0116\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0117\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\n\nelse if(msg.payload[0] == \"01\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n\n\n\n}else if(msg.payload[0] == \"02\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"03\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"04\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"05\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"06\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"07\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"08\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"09\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"010\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"011\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"012\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"013\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"014\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"015\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"016\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"017\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018A\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018B\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\n\n\n\nelse{\n    msg.topic = \"INSERT INTO table_spam(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\nreturn msg;",
        "x": 80,
        "y": 40,
        "wires": []
    },
    {
        "id": "da62dbc8d8829c42",
        "type": "serial in",
        "z": "42e46494b8beb695",
        "name": "",
        "serial": "8236ee8772344c42",
        "x": 90,
        "y": 80,
        "wires": [
            [
                "d9222b57a761438e",
                "aa2ff59dc2863e66"
            ]
        ]
    },
    {
        "id": "f288bfa36461ca2c",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "query_sql",
        "func": "var line_id\nvar name_product\nvar target\nvar actual\nvar loading_time\nvar efficiency\nvar delay\nvar cycle_time\nvar status_montiv\nvar loading_time\nvar status_hikitori\nvar time_trouble\nvar time_trouble_quality\nvar andon\nvar line_name\nvar pg\n\nline_id = msg.payload[0]\nname_product = msg.payload[1]\ntarget = msg.payload[2]\nactual = msg.payload[3]\nloading_time = msg.payload[4]\nefficiency = msg.payload[5]\ndelay = msg.payload[6]\ncycle_time = msg.payload[7]\nstatus_montiv = msg.payload[8]\ntime_trouble = msg.payload[9]\ntime_trouble_quality = msg.payload[10]\nandon = msg.payload[11]\n\nif (line_id == \"1\") {\n    line_name = 'Common Rail 1'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"2\") {\n    line_name = 'Common Rail 2'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"3\") {\n    line_name = 'Common Rail 3'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"4\") {\n    line_name = 'Common Rail 4'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"5\") {\n\n    line_name = 'Common Rail 5'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"6\") {\n    line_name = 'Common Rail 6'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"7\") {\n    line_name = 'Common Rail 7'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"8\") {\n    line_name = 'Common Rail 8'\n    pg = 'PG2.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"9\") {\n    line_name = 'Common Rail 9'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"10\") {\n    line_name = 'Common Rail 10'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"11\") {\n    line_name = 'Common Rail 11'\n    pg = 'PG2.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"12\") {\n    line_name = 'Common Rail 12'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"13\") {\n    line_name = 'Common Rail 13'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n}\nelse if (line_id == \"13A\") {\n    line_name = 'Cam housing A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n}\nelse if (line_id == \"13B\") {\n    line_name = 'Cam housing B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n}\n\nelse if (line_id == \"14\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"14A\") {\n    line_name = 'Cam housing C'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"14B\") {\n    line_name = 'Cam housing D'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"15\") {\n    line_name = 'Cam housing'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"15A\") {\n    line_name = 'Cam housing E NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"15B\") {\n    line_name = 'Cam housing E D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"16\") {\n    line_name = 'Cam housing Assy A'\n    pg = 'PG2.3'\n}\n\nelse if (line_id == \"17\") {\n    line_name = 'Cam housing Assy B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"18\") {\n    line_name = 'Cam housing Assy'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"18A\") {\n    line_name = 'Cam housing Assy C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"18B\") {\n    line_name = 'Cam housing Assy C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"19\") {\n    line_name = 'Cam Cap 1A'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"20\") {\n    line_name = 'Cam Cap 1B'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"21\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"21A\") {\n    line_name = 'Cam Cap 1C NR'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"21B\") {\n    line_name = 'Cam Cap 1C D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"22\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"22A\") {\n    line_name = 'Cam Cap 2 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"22B\") {\n    line_name = 'Cam Cap 2 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"22C\") {\n    line_name = 'Cam Cap 2 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"22D\") {\n    line_name = 'Cam Cap 2 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"23\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"23A\") {\n    line_name = 'Cam Cap 3 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"23B\") {\n    line_name = 'Cam Cap 3 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"23C\") {\n    line_name = 'Cam Cap 3 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"23D\") {\n    line_name = 'Cam Cap 3 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"24\") {\n    line_name = 'Cam Cap'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"24A\") {\n    line_name = 'Cam Cap 4 2MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"24B\") {\n    line_name = 'Cam Cap 4 3MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"24C\") {\n    line_name = 'Cam Cap 4 4MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"24D\") {\n    line_name = 'Cam Cap 4 5MP'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"25\") {\n    line_name = 'Cam Cap 2 & 3 D05E'\n    pg = 'PG2.3'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"26\") {\n    line_name = 'Retainer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"27\") {\n    line_name = 'Connector'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"27A\") {\n    line_name = 'Spacer'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"27B\") {\n    line_name = 'Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"27C\") {\n    line_name = 'Spacer Drive Gear'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"28\") {\n    line_name = 'Housing'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"28A\") {\n    line_name = 'Housing Inlet TR '\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"28B\") {\n    line_name = 'Housing Inlet D13E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\n\nelse if (line_id == \"29\") {\n    line_name = 'Balance Shaft NO 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"29A\") {\n    line_name = 'Balance Shaft NO 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"30\") {\n    line_name = 'Roller Arm 1'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"30A\") {\n    line_name = 'Roller Arm 1 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"30B\") {\n    line_name = 'Roller Arm 1 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"30C\") {\n    line_name = 'Roller Arm 1 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"30D\") {\n    line_name = 'Roller Arm 1 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"30E\") {\n    line_name = 'Roller Arm 1 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\nelse if (line_id == \"31\") {\n    line_name = 'Roller Arm 2'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"31A\") {\n    line_name = 'Roller Arm 2 A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"31B\") {\n    line_name = 'Roller Arm 2 B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"31C\") {\n    line_name = 'Roller Arm 2 C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"31D\") {\n    line_name = 'Roller Arm 2 D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"31E\") {\n    line_name = 'Roller Arm 2 E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"32\") {\n    line_name = 'Hydraulic Lash Adjuster'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"32A\") {\n    line_name = 'Hydraulic Lash Adjuster A'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"32B\") {\n    line_name = 'Hydraulic Lash Adjuster B'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"32C\") {\n    line_name = 'Hydraulic Lash Adjuster C'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"32D\") {\n    line_name = 'Hydraulic Lash Adjuster D'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"32E\") {\n    line_name = 'Hydraulic Lash Adjuster E'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\nelse if (line_id == \"33\") {\n    line_name = 'Housing Inlet Water'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34\") {\n    line_name = 'Packing IMV'\n    pg = 'PG1.1'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34A\") {\n    line_name = 'Packing IMV 1'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34B\") {\n    line_name = 'Packing IMV 2'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34C\") {\n    line_name = 'Packing IMV 3'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34D\") {\n    line_name = 'Packing IMV 4'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34E\") {\n    line_name = 'Packing IMV 5'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34F\") {\n    line_name = 'Packing IMV 6'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34G\") {\n    line_name = 'Packing IMV 7'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34H\") {\n    line_name = 'Packing IMV 8'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34I\") {\n    line_name = 'Packing IMV 9'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34J\") {\n    line_name = 'Packing IMV 10'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34K\") {\n    line_name = 'Packing IMV 11'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34L\") {\n    line_name = 'Packing IMV 12'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34M\") {\n    line_name = 'Packing IMV 13'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34N\") {\n    line_name = 'Packing IMV 14'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34O\") {\n    line_name = 'Packing IMV 15'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34P\") {\n    line_name = 'Packing IMV 16'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34Q\") {\n    line_name = 'Packing IMV 17'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"34R\") {\n    line_name = 'Packing IMV 18'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n} else if (line_id == \"35\") {\n    line_name = 'Packing Common Rail'\n    pg = 'PG1.2'\n    msg.topic = \"INSERT INTO 03_table_all_transit_montiv(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '\" + line_id + \"','\" + pg + \"', '\" + line_name + \"', '\" + name_product + \"', '\" + target + \"', '\" + actual + \"', '\" + loading_time + \"', '\" + efficiency + \"', '\" + delay + \"','\" + cycle_time + \"','\" + status_montiv + \"', '\" + time_trouble + \"', '\" + time_trouble_quality + \"', '\" + andon + \"');\"\n\n}\n\n\nelse {\n    msg.topic = \"INSERT INTO 01_table_spam(id , data1 , data2 , data3 , data4 , data5 , data6 , data7 , data8 , data9 , data10 , data11 , data12 , data13 , data14 , data15 , data16 , data17 , data18 , data19 , data20 , data21 , data22 , data23 , data24 , data25) values(null, '\" + msg.payload[0] + \"', '\" + msg.payload[1] + \"', '\" + msg.payload[2] + \"', '\" + msg.payload[3] + \"', '\" + msg.payload[4] + \"', '\" + msg.payload[5] + \"','\" + msg.payload[6] + \"', '\" + msg.payload[7] + \"', '\" + msg.payload[8] + \"', '\" + msg.payload[9] + \"', '\" + msg.payload[10] + \"', '\" + msg.payload[11] + \"', '\" + msg.payload[12] + \"', '\" + msg.payload[13] + \"', '\" + msg.payload[14] + \"', '\" + msg.payload[15] + \"', '\" + msg.payload[16] + \"', '\" + msg.payload[17] + \"', '\" + msg.payload[18] + \"', '\" + msg.payload[19] + \"', '\" + msg.payload[20] + \"', '\" + msg.payload[21] + \"', '\" + msg.payload[22] + \"', '\" + msg.payload[23] + \"', '\" + msg.payload[24] + \"');\"\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 80,
        "wires": [
            [
                "8a47dd5f0f4f0bad"
            ]
        ]
    },
    {
        "id": "8a47dd5f0f4f0bad",
        "type": "mysql",
        "z": "42e46494b8beb695",
        "mydb": "dd07523e193c906c",
        "name": "",
        "x": 460,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "7ec3a38947f28929",
        "type": "ui_chart",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 1,
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
        "x": 580,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "9631ecd01e147bea",
        "type": "ui_button",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 4,
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
        "x": 450,
        "y": 200,
        "wires": [
            [
                "7ec3a38947f28929"
            ]
        ]
    },
    {
        "id": "5c9fefcc6ad4e6c6",
        "type": "ui_gauge",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 2,
        "width": 6,
        "height": 7,
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
        "x": 530,
        "y": 280,
        "wires": []
    },
    {
        "id": "34267a4218bf48e1",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
        "order": 3,
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
        "x": 530,
        "y": 320,
        "wires": []
    },
    {
        "id": "1b291a731bc35928",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
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
        "x": 540,
        "y": 360,
        "wires": []
    },
    {
        "id": "421d920c648382f6",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
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
        "x": 510,
        "y": 400,
        "wires": []
    },
    {
        "id": "65a7472b11f6711e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Name",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 200,
        "wires": [
            [
                "34267a4218bf48e1"
            ]
        ]
    },
    {
        "id": "8cdcd6171328e0df",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Target",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "338bec7c3e7f9683",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Actual",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "9e5393812d3fb9d0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 LT",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 320,
        "wires": [
            [
                "1b291a731bc35928"
            ]
        ]
    },
    {
        "id": "29d3befccb8e17b0",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Eff",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 360,
        "wires": [
            [
                "5c9fefcc6ad4e6c6"
            ]
        ]
    },
    {
        "id": "4355a1d1758fa00f",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Delay",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 400,
        "wires": [
            [
                "421d920c648382f6"
            ]
        ]
    },
    {
        "id": "76ae3e67c105c840",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Status",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "2b88fe2ebc51d944",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 CT",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 290,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "66c7f5601e88c698",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Trouble_Mesin",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "367ce4281fa2f394",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Trouble_Qualty",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 330,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "bdbb01c0016f8552",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR1 Andon",
        "func": "if (msg.payload[0] == \"1\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 300,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "2a3282fc9673f6a4",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Name",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 680,
        "wires": [
            [
                "bde4b1e0caf6109b"
            ]
        ]
    },
    {
        "id": "7cb2e2856f4fe215",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Target",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "5f6824876d37e440",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Actual",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "dcb0401b33df8ca5",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A LT",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 800,
        "wires": [
            [
                "7c9135ee5b06298a"
            ]
        ]
    },
    {
        "id": "13159319959ed95a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Eff",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 840,
        "wires": [
            [
                "34bd5e0cc0f831ee"
            ]
        ]
    },
    {
        "id": "0f3b83071c832498",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Delay",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 880,
        "wires": [
            [
                "da58352a0a962621"
            ]
        ]
    },
    {
        "id": "ae4eefd48912d6c1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Status",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 920,
        "wires": [
            []
        ]
    },
    {
        "id": "5689539644091c02",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A CT",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 310,
        "y": 960,
        "wires": [
            []
        ]
    },
    {
        "id": "e5b947b83713081a",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Trouble_Mesin",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 1000,
        "wires": [
            []
        ]
    },
    {
        "id": "362048e60993cfb4",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Trouble_Qualty",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "51aaf264d1285d03",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "Cam Cap 1A Andon",
        "func": "if (msg.payload[0] == \"19\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 1080,
        "wires": [
            []
        ]
    },
    {
        "id": "05ee26e335836f5b",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "CR1",
        "info": "",
        "x": 290,
        "y": 160,
        "wires": []
    },
    {
        "id": "50953ceb768d63c1",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "Cam cap 1A",
        "info": "",
        "x": 300,
        "y": 640,
        "wires": []
    },
    {
        "id": "353e9d30a547075d",
        "type": "ui_chart",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 1,
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
        "x": 730,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "d8632978f9332b37",
        "type": "ui_button",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 4,
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
        "x": 600,
        "y": 660,
        "wires": [
            [
                "353e9d30a547075d"
            ]
        ]
    },
    {
        "id": "34bd5e0cc0f831ee",
        "type": "ui_gauge",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "0f8251f13dd8e537",
        "order": 2,
        "width": 6,
        "height": 7,
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
        "x": 680,
        "y": 740,
        "wires": []
    },
    {
        "id": "bde4b1e0caf6109b",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
        "order": 3,
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
        "x": 680,
        "y": 780,
        "wires": []
    },
    {
        "id": "7c9135ee5b06298a",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
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
        "x": 690,
        "y": 820,
        "wires": []
    },
    {
        "id": "da58352a0a962621",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "0f8251f13dd8e537",
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
        "x": 660,
        "y": 860,
        "wires": []
    },
    {
        "id": "6c1d1f029f183dac",
        "type": "ui_chart",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "59f7b235b22b239b",
        "order": 1,
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
        "x": 1340,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "591ab4f6c03026fe",
        "type": "ui_button",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "59f7b235b22b239b",
        "order": 4,
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
        "x": 1210,
        "y": 200,
        "wires": [
            [
                "6c1d1f029f183dac"
            ]
        ]
    },
    {
        "id": "10056f612924c080",
        "type": "ui_gauge",
        "z": "42e46494b8beb695",
        "name": "",
        "group": "59f7b235b22b239b",
        "order": 2,
        "width": 6,
        "height": 7,
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
        "x": 1290,
        "y": 280,
        "wires": []
    },
    {
        "id": "82f91e20cf5e8e0e",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "59f7b235b22b239b",
        "order": 3,
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
        "x": 1290,
        "y": 320,
        "wires": []
    },
    {
        "id": "5a223fe95c6c6387",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "59f7b235b22b239b",
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
        "x": 1300,
        "y": 360,
        "wires": []
    },
    {
        "id": "1ced39d7a987f291",
        "type": "ui_text",
        "z": "42e46494b8beb695",
        "group": "59f7b235b22b239b",
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
        "x": 1270,
        "y": 400,
        "wires": []
    },
    {
        "id": "c2d9eb56288a1788",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Name",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[1]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 200,
        "wires": [
            [
                "82f91e20cf5e8e0e"
            ]
        ]
    },
    {
        "id": "8f1531fda66518c1",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Target",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[2]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "dfc6090487f39291",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Actual",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[3]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "3763ea3a00cad388",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 LT",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[4]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1040,
        "y": 320,
        "wires": [
            [
                "5a223fe95c6c6387"
            ]
        ]
    },
    {
        "id": "6ba1662defe6a006",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Eff",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[5]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1040,
        "y": 360,
        "wires": [
            [
                "10056f612924c080"
            ]
        ]
    },
    {
        "id": "c3ee4d27eb7b938b",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Delay",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[6]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 400,
        "wires": [
            [
                "1ced39d7a987f291"
            ]
        ]
    },
    {
        "id": "969d719385d34670",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Status",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[7]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "3613a0ef0187d263",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 CT",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[8]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1040,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "b9a1da3236bb4812",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Trouble_Mesin",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[9]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1080,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "899c496ed2e907c3",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Trouble_Qualty",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[10]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1080,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "eddbadc47517a7ea",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "CR2 Andon",
        "func": "if (msg.payload[0] == \"2\") {\n    msg.payload = msg.payload[11]\n    msg.topic = \"name_product\"\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1050,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "90f3f0827a5c9b02",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "CR2",
        "info": "",
        "x": 1030,
        "y": 160,
        "wires": []
    },
    {
        "id": "b6e96eb62419ebaf",
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
        "x": 280,
        "y": 40,
        "wires": []
    },
    {
        "id": "d9222b57a761438e",
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
        "x": 90,
        "y": 140,
        "wires": [
            [
                "f288bfa36461ca2c",
                "65a7472b11f6711e",
                "8cdcd6171328e0df",
                "338bec7c3e7f9683",
                "9e5393812d3fb9d0",
                "29d3befccb8e17b0",
                "4355a1d1758fa00f",
                "76ae3e67c105c840",
                "2b88fe2ebc51d944",
                "66c7f5601e88c698",
                "367ce4281fa2f394",
                "bdbb01c0016f8552",
                "2a3282fc9673f6a4",
                "7cb2e2856f4fe215",
                "5f6824876d37e440",
                "dcb0401b33df8ca5",
                "13159319959ed95a",
                "0f3b83071c832498",
                "ae4eefd48912d6c1",
                "5689539644091c02",
                "e5b947b83713081a",
                "362048e60993cfb4",
                "51aaf264d1285d03",
                "c2d9eb56288a1788",
                "8f1531fda66518c1",
                "dfc6090487f39291",
                "3763ea3a00cad388",
                "6ba1662defe6a006",
                "c3ee4d27eb7b938b",
                "969d719385d34670",
                "3613a0ef0187d263",
                "b9a1da3236bb4812",
                "899c496ed2e907c3",
                "eddbadc47517a7ea",
                "b6e96eb62419ebaf"
            ]
        ]
    },
    {
        "id": "b3f98430f21141c6",
        "type": "mysql",
        "z": "42e46494b8beb695",
        "mydb": "dd07523e193c906c",
        "name": "",
        "x": 900,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "4b8da7e339beb74e",
        "type": "function",
        "z": "42e46494b8beb695",
        "name": "query_sql",
        "func": "var hikitori_id\nvar actual_pouling\nvar loading_time\nvar status\nvar cycle_time\nvar andon\n\nhikitori_id = msg.payload[0]\nactual_pouling = msg.payload[1]\nloading_time = msg.payload[2]\nstatus = msg.payload[3]\ncycle_time = msg.payload[4]\nandon = msg.payload[5]\n\nif (hikitori_id == \"HIKITORI A\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI B\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI C\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI D\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI E\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI F\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI G\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n} else if (hikitori_id == \"HIKITORI H\") {\n    msg.topic = \"INSERT INTO 02_table_all_transit_hikitori(id, hikitori_id, actual_pouling, loading_time, status, cycle_time, andon) values(null, '\" + hikitori_id + \"','\" + actual_pouling + \"', '\" + loading_time + \"', '\" + status + \"','\" + cycle_time + \"', '\" + andon + \"');\"\n}\n\n\n\nelse {\n    msg.topic = \"INSERT INTO 01_table_spam(id , data1 , data2 , data3 , data4 , data5 , data6 , data7 , data8 , data9 , data10 , data11 , data12 , data13 , data14 , data15 , data16 , data17 , data18 , data19 , data20 , data21 , data22 , data23 , data24 , data25) values(null, '\" + msg.payload[0] + \"', '\" + msg.payload[1] + \"', '\" + msg.payload[2] + \"', '\" + msg.payload[3] + \"', '\" + msg.payload[4] + \"', '\" + msg.payload[5] + \"','\" + msg.payload[6] + \"', '\" + msg.payload[7] + \"', '\" + msg.payload[8] + \"', '\" + msg.payload[9] + \"', '\" + msg.payload[10] + \"', '\" + msg.payload[11] + \"', '\" + msg.payload[12] + \"', '\" + msg.payload[13] + \"', '\" + msg.payload[14] + \"', '\" + msg.payload[15] + \"', '\" + msg.payload[16] + \"', '\" + msg.payload[17] + \"', '\" + msg.payload[18] + \"', '\" + msg.payload[19] + \"', '\" + msg.payload[20] + \"', '\" + msg.payload[21] + \"', '\" + msg.payload[22] + \"', '\" + msg.payload[23] + \"', '\" + msg.payload[24] + \"');\"\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 740,
        "y": 80,
        "wires": [
            [
                "b3f98430f21141c6"
            ]
        ]
    },
    {
        "id": "aa2ff59dc2863e66",
        "type": "string",
        "z": "42e46494b8beb695",
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
                        "value": "30"
                    }
                ]
            }
        ],
        "prop": "payload",
        "propout": "payload",
        "object": "msg",
        "objectout": "msg",
        "x": 610,
        "y": 140,
        "wires": [
            [
                "4b8da7e339beb74e"
            ]
        ]
    },
    {
        "id": "8236ee8772344c42",
        "type": "serial-port",
        "serialport": "COM5",
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
        "bin": "bin",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "dd07523e193c906c",
        "type": "MySQLdatabase",
        "name": "",
        "host": "127.0.0.1",
        "port": "3307",
        "db": "database_tps",
        "tz": "",
        "charset": "UTF8"
    },
    {
        "id": "0f8251f13dd8e537",
        "type": "ui_group",
        "name": "Target-Aktual",
        "tab": "4e2f7865b50be67f",
        "order": 1,
        "disp": true,
        "width": 30,
        "collapse": false,
        "className": ""
    },
    {
        "id": "59f7b235b22b239b",
        "type": "ui_group",
        "name": "Target-Aktual",
        "tab": "d96831e8a2f7a2c9",
        "order": 1,
        "disp": true,
        "width": 30,
        "collapse": false,
        "className": ""
    },
    {
        "id": "4e2f7865b50be67f",
        "type": "ui_tab",
        "name": "Monitoring Cam Shaft Cam Housing 1B",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "d96831e8a2f7a2c9",
        "type": "ui_tab",
        "name": "Monitoring Cam Shaft Cam Housing 1B",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    }
]
