[
    {
        "id": "d61eb8f20ee4155f",
        "type": "tab",
        "label": "Master-Dashboard",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "42e46494b8beb695",
        "type": "tab",
        "label": "OTICS",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "a87d6db468e140d9",
        "type": "tab",
        "label": "Last Task",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b3669379a658aa82",
        "type": "serial-port",
        "serialport": "COM7",
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
        "id": "b7fb6e4682c52d9e",
        "type": "mqtt-broker",
        "name": "",
        "broker": "broker.mqtt-dashboard.com",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
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
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
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
        "id": "a2b5f674f498da7d",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#08ebf7",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": true
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey",
                "palette": "light"
            }
        },
        "site": {
            "name": "PT.OTICS INDONESIA",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "true",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "7bf32b52225edc02",
        "type": "sqlitedb",
        "db": "D:\\S1 - Tugas Akhir\\TA_ESP32\\Database\\db_ta.db",
        "mode": "RWC"
    },
    {
        "id": "2cae7b515b3cb2fc",
        "type": "postgreSQLConfig",
        "name": "db_postgres",
        "host": "127.0.0.1",
        "hostFieldType": "str",
        "port": "5432",
        "portFieldType": "num",
        "database": "postgres",
        "databaseFieldType": "str",
        "ssl": "true",
        "sslFieldType": "bool",
        "applicationName": "",
        "applicationNameType": "str",
        "max": "10",
        "maxFieldType": "num",
        "idle": "1000",
        "idleFieldType": "num",
        "connectionTimeout": "10000",
        "connectionTimeoutFieldType": "num",
        "user": "wanda",
        "userFieldType": "str",
        "password": "kalam",
        "passwordFieldType": "str"
    },
    {
        "id": "1b4b838b940ad199",
        "type": "serial-port",
        "serialport": "COM4",
        "serialbaud": "115200",
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
        "id": "da2319ef591eb1c7",
        "type": "ui_tab",
        "name": "Button",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "254c49d6b0c460e7",
        "type": "ui_group",
        "name": "Function",
        "tab": "da2319ef591eb1c7",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "71b58a118eeded57",
        "type": "ui_group",
        "name": "Setting",
        "tab": "da2319ef591eb1c7",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "6deb309b5c7ae1a7",
        "type": "ui_spacer",
        "z": "d61eb8f20ee4155f",
        "name": "spacer",
        "group": "71b58a118eeded57",
        "order": 2,
        "width": 2,
        "height": 1
    },
    {
        "id": "442c8cf5375df204",
        "type": "ui_spacer",
        "z": "d61eb8f20ee4155f",
        "name": "spacer",
        "group": "71b58a118eeded57",
        "order": 4,
        "width": 2,
        "height": 1
    },
    {
        "id": "2bce71585dd2db5e",
        "type": "ui_tab",
        "name": "Dropdown",
        "icon": "dashboard",
        "order": 3,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "a8dcf5c6a201dcef",
        "type": "ui_group",
        "name": "Function",
        "tab": "2bce71585dd2db5e",
        "order": 1,
        "disp": true,
        "width": 7,
        "collapse": false,
        "className": ""
    },
    {
        "id": "f6f9fc97a509544b",
        "type": "ui_group",
        "name": "Setting",
        "tab": "2bce71585dd2db5e",
        "order": 2,
        "disp": true,
        "width": 11,
        "collapse": false,
        "className": ""
    },
    {
        "id": "60bfb65ac2f11345",
        "type": "ui_button",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "group": "254c49d6b0c460e7",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Tes Button",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "add_box",
        "payload": "Button Pressed",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 470,
        "y": 80,
        "wires": [
            [
                "69c8bda457a45752"
            ]
        ]
    },
    {
        "id": "69c8bda457a45752",
        "type": "debug",
        "z": "d61eb8f20ee4155f",
        "name": "debug 37",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 620,
        "y": 80,
        "wires": []
    },
    {
        "id": "a4e26ed60239f18e",
        "type": "ui_button",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "group": "71b58a118eeded57",
        "order": 3,
        "width": 4,
        "height": 1,
        "passthru": false,
        "label": "Disable Button",
        "tooltip": "",
        "color": "red",
        "bgcolor": "white",
        "className": "",
        "icon": "settings",
        "payload": "false",
        "payloadType": "bool",
        "topic": "topic",
        "topicType": "msg",
        "x": 120,
        "y": 100,
        "wires": [
            [
                "ac35ce1ec2ede5a5"
            ]
        ]
    },
    {
        "id": "63e50b749673d39c",
        "type": "ui_button",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "group": "71b58a118eeded57",
        "order": 1,
        "width": 4,
        "height": 1,
        "passthru": false,
        "label": "Enable Button",
        "tooltip": "",
        "color": "green",
        "bgcolor": "white",
        "className": "",
        "icon": "settings",
        "payload": "true",
        "payloadType": "bool",
        "topic": "topic",
        "topicType": "msg",
        "x": 120,
        "y": 60,
        "wires": [
            [
                "ac35ce1ec2ede5a5"
            ]
        ]
    },
    {
        "id": "ac35ce1ec2ede5a5",
        "type": "change",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "enabled",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 300,
        "y": 80,
        "wires": [
            [
                "60bfb65ac2f11345"
            ]
        ]
    },
    {
        "id": "63af162c77a69e66",
        "type": "ui_dropdown",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "label": "Select",
        "tooltip": "",
        "place": "Select option",
        "group": "a8dcf5c6a201dcef",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "Topic 1",
                "value": "Topic 1",
                "type": "str"
            },
            {
                "label": "Topic 2",
                "value": 2,
                "type": "num"
            },
            {
                "label": "Topic 3",
                "value": true,
                "type": "bool"
            }
        ],
        "payload": "",
        "topic": "topic",
        "topicType": "msg",
        "className": "",
        "x": 90,
        "y": 140,
        "wires": [
            [
                "d57660ad13318795"
            ]
        ]
    },
    {
        "id": "d57660ad13318795",
        "type": "debug",
        "z": "d61eb8f20ee4155f",
        "name": "debug 38",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 260,
        "y": 140,
        "wires": []
    },
    {
        "id": "34b4413de4d1ba24",
        "type": "debug",
        "z": "d61eb8f20ee4155f",
        "name": "debug 36",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 300,
        "wires": []
    },
    {
        "id": "8a2b209b92cd0840",
        "type": "sqlite",
        "z": "d61eb8f20ee4155f",
        "mydb": "7bf32b52225edc02",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "SQLITE",
        "x": 400,
        "y": 300,
        "wires": [
            [
                "34b4413de4d1ba24"
            ]
        ]
    },
    {
        "id": "c138ac637dc1a7ee",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "Create Table",
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
        "topic": "CREATE TABLE RANDOMNUM( TIMESTAMP INT PRIMARY KEY NOT NULL, VALUE INT NOT NULL, BOOL INT NOT NULL)",
        "payload": "",
        "payloadType": "date",
        "x": 150,
        "y": 300,
        "wires": [
            [
                "8a2b209b92cd0840"
            ]
        ]
    },
    {
        "id": "02df675f47999f1f",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "Insert",
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
        "x": 130,
        "y": 420,
        "wires": [
            [
                "42ef8b9d23774869"
            ]
        ]
    },
    {
        "id": "9ffada0dddc49f6a",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "Read",
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
        "topic": "SELECT * FROM RANDOMNUM ORDER BY TIMESTAMP DESC LIMIT 100;",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 460,
        "wires": [
            [
                "8a2b209b92cd0840"
            ]
        ]
    },
    {
        "id": "46e2be7ca80973da",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "Delete",
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
        "x": 130,
        "y": 500,
        "wires": [
            [
                "42ef8b9d23774869"
            ]
        ]
    },
    {
        "id": "7ea8fd83d7d5378f",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "",
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
        "x": 140,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "30ebca6865cc5a89",
        "type": "inject",
        "z": "d61eb8f20ee4155f",
        "name": "",
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
        "x": 140,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "42ef8b9d23774869",
        "type": "function",
        "z": "d61eb8f20ee4155f",
        "name": "insert",
        "func": "var randomNum = Math.round(Math.random() * 100); \nvar largeBool = (randomNum > 50) ? 1 : 0; \nvar newMsg = { \"topic\": \"INSERT INTO RANDOMNUM VALUES ( \" + msg.payload + \", \" + randomNum + \", \" + largeBool + \")\" }  \n\n\nreturn newMsg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 270,
        "y": 380,
        "wires": [
            [
                "8a2b209b92cd0840"
            ]
        ]
    },
    {
        "id": "0a7eeff18bf509f1",
        "type": "ui_date_picker",
        "z": "d61eb8f20ee4155f",
        "name": "",
        "label": "date",
        "group": "f6f9fc97a509544b",
        "order": 1,
        "width": 11,
        "height": 1,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "className": "",
        "x": 130,
        "y": 660,
        "wires": [
            []
        ]
    },
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
        "x": 740,
        "y": 140,
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
        "x": 340,
        "y": 140,
        "wires": [
            []
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
        "x": 1770,
        "y": 1140,
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
        "id": "4fe9ad9929838ceb",
        "type": "comment",
        "z": "42e46494b8beb695",
        "name": "",
        "info": "var line\nvar target\nvar aktual\nvar loading_time\nvar efisiensi\nvar delay\nvar status\nvar cycle_time\nvar time_trouble\n\nvar name_hikitori\nvar cycle_time\nvar time_begin\nvar time_finish\nvar loading_time\nvar status_hikitori\n\n\nif (msg.payload[0] == \"0110\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0111\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0112\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0113\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0114\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n    // query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\nelse if (msg.payload[0] == \"0115\"){\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0116\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\nelse if (msg.payload[0] == \"0117\") {\n    name_hikitori = msg.payload[0]\n    cycle_time = msg.payload[1]\n    time_begin = msg.payload[2]\n    time_finish = msg.payload[3]\n    loading_time = msg.payload[4]\n    status_hikitori = msg.payload[5]\n\n// query__________________________\n    msg.topic = \"INSERT INTO table_monitoring_hikitori_transit(id, name_hikitori, cycle_time, time_begin, time_finish, loading_time, status) values(null, '\" + name_hikitori + \"', '\" + cycle_time + \"', '\" + time_begin + \"', '\" + time_finish + \"', '\" + loading_time + \"', '\" + status_hikitori + \"');\"\n}\n\n\nelse if(msg.payload[0] == \"01\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n\n\n\n}else if(msg.payload[0] == \"02\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"03\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"04\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"05\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"06\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"07\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"08\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"09\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"010\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"011\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"012\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"013\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"014\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"015\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"016\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"017\") {\n\n    line = msg.payload[0]\n    target = msg.payload[1]\n    aktual = msg.payload[2]\n    loading_time = msg.payload[3]\n    efisiensi = msg.payload[4]\n    delay = msg.payload[5]\n    status = msg.payload[6]\n    cycle_time = msg.payload[7]\n    time_trouble = msg.payload[8]\n// query__________________________\n\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018A\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}else if(msg.payload[0] == \"018B\") {\n    msg.topic = \"INSERT INTO table_montiv_transit(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\n\n\n\nelse{\n    msg.topic = \"INSERT INTO table_spam(id, line, target, aktual, loading_time, efisiensi, delay, status, cycle_time, time_trouble) values(null, '\" + line + \"', '\" + target + \"', '\" + aktual + \"', '\" + loading_time + \"', '\" + efisiensi + \"', '\" + delay + \"','\" + status + \"', '\" + cycle_time + \"', '\" + time_trouble + \"');\"\n}\n\nreturn msg;",
        "x": 780,
        "y": 80,
        "wires": []
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
        "x": 210,
        "y": 220,
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
        "x": 210,
        "y": 260,
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
        "x": 210,
        "y": 300,
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
        "x": 210,
        "y": 340,
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
        "x": 210,
        "y": 380,
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
        "x": 210,
        "y": 420,
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
        "x": 210,
        "y": 460,
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
        "x": 210,
        "y": 500,
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
        "x": 210,
        "y": 540,
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
        "x": 220,
        "y": 580,
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
        "x": 220,
        "y": 620,
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
        "x": 220,
        "y": 660,
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
        "x": 280,
        "y": 700,
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
        "x": 280,
        "y": 740,
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
        "x": 280,
        "y": 780,
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
        "x": 280,
        "y": 820,
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
        "x": 290,
        "y": 860,
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
        "x": 300,
        "y": 900,
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
        "x": 270,
        "y": 940,
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
        "x": 270,
        "y": 980,
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
        "x": 280,
        "y": 1020,
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
        "x": 290,
        "y": 1060,
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
        "x": 290,
        "y": 1100,
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
        "x": 290,
        "y": 1140,
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
        "x": 300,
        "y": 1180,
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
        "x": 320,
        "y": 1260,
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
        "x": 280,
        "y": 1300,
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
        "x": 280,
        "y": 1340,
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
        "x": 280,
        "y": 1380,
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
        "x": 260,
        "y": 1420,
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
        "x": 230,
        "y": 1460,
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
        "x": 230,
        "y": 1500,
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
        "x": 240,
        "y": 1540,
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
        "x": 240,
        "y": 1580,
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
        "x": 240,
        "y": 1620,
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
        "x": 260,
        "y": 1660,
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
        "x": 290,
        "y": 1700,
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
        "x": 260,
        "y": 1740,
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
        "x": 730,
        "y": 220,
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
        "x": 730,
        "y": 260,
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
        "x": 730,
        "y": 300,
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
        "x": 730,
        "y": 340,
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
        "x": 310,
        "y": 1220,
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
        "x": 730,
        "y": 380,
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
        "x": 730,
        "y": 420,
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
        "x": 730,
        "y": 460,
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
        "x": 730,
        "y": 500,
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
        "x": 730,
        "y": 540,
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
        "x": 740,
        "y": 580,
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
        "x": 740,
        "y": 620,
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
        "x": 740,
        "y": 660,
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
        "x": 800,
        "y": 700,
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
        "x": 800,
        "y": 740,
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
        "x": 800,
        "y": 780,
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
        "x": 800,
        "y": 820,
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
        "x": 820,
        "y": 860,
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
        "x": 820,
        "y": 900,
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
        "x": 790,
        "y": 940,
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
        "x": 790,
        "y": 980,
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
        "x": 800,
        "y": 1020,
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
        "x": 810,
        "y": 1060,
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
        "x": 810,
        "y": 1100,
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
        "x": 810,
        "y": 1140,
        "wires": [
            []
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
        "x": 820,
        "y": 1180,
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
        "x": 840,
        "y": 1260,
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
        "x": 800,
        "y": 1300,
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
        "x": 800,
        "y": 1340,
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
        "x": 800,
        "y": 1380,
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
        "x": 780,
        "y": 1420,
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
        "x": 750,
        "y": 1460,
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
        "x": 750,
        "y": 1500,
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
        "x": 760,
        "y": 1540,
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
        "x": 760,
        "y": 1580,
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
        "x": 760,
        "y": 1620,
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
        "x": 780,
        "y": 1660,
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
        "x": 810,
        "y": 1700,
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
        "x": 780,
        "y": 1740,
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
        "x": 830,
        "y": 1220,
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
        "x": 1250,
        "y": 380,
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
        "x": 1250,
        "y": 420,
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
        "x": 1250,
        "y": 460,
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
        "x": 1250,
        "y": 500,
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
        "x": 1250,
        "y": 540,
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
        "x": 1260,
        "y": 580,
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
        "x": 1260,
        "y": 620,
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
        "x": 1260,
        "y": 660,
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
        "x": 1320,
        "y": 700,
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
        "x": 1320,
        "y": 740,
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
        "x": 1320,
        "y": 780,
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
        "x": 1320,
        "y": 820,
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
        "x": 1340,
        "y": 860,
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
        "x": 1340,
        "y": 900,
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
        "x": 1310,
        "y": 940,
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
        "x": 1310,
        "y": 980,
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
        "x": 1320,
        "y": 1020,
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
        "x": 1330,
        "y": 1060,
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
        "x": 1330,
        "y": 1100,
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
        "x": 1330,
        "y": 1140,
        "wires": [
            []
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
        "x": 1340,
        "y": 1180,
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
        "x": 1360,
        "y": 1260,
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
        "x": 1320,
        "y": 1300,
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
        "x": 1320,
        "y": 1340,
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
        "x": 1320,
        "y": 1380,
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
        "x": 1300,
        "y": 1420,
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
        "x": 1270,
        "y": 1460,
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
        "x": 1270,
        "y": 1500,
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
        "x": 1280,
        "y": 1540,
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
        "x": 1280,
        "y": 1580,
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
        "x": 1280,
        "y": 1620,
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
        "x": 1300,
        "y": 1660,
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
        "x": 1330,
        "y": 1700,
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
        "x": 1300,
        "y": 1740,
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
        "x": 1350,
        "y": 1220,
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
        "x": 1250,
        "y": 220,
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
        "x": 1250,
        "y": 260,
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
        "x": 1250,
        "y": 300,
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
        "x": 1250,
        "y": 340,
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
        "x": 1800,
        "y": 380,
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
        "x": 1800,
        "y": 420,
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
        "x": 1800,
        "y": 460,
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
        "x": 1800,
        "y": 500,
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
        "x": 1800,
        "y": 540,
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
        "x": 1800,
        "y": 580,
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
        "x": 1800,
        "y": 620,
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
        "x": 1800,
        "y": 220,
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
        "x": 1800,
        "y": 260,
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
        "x": 1800,
        "y": 300,
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
        "x": 1800,
        "y": 340,
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
        "x": 2320,
        "y": 380,
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
        "x": 2320,
        "y": 420,
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
        "x": 2320,
        "y": 460,
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
        "x": 2320,
        "y": 500,
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
        "x": 2320,
        "y": 540,
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
        "x": 2320,
        "y": 620,
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
        "x": 2320,
        "y": 220,
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
        "x": 2320,
        "y": 260,
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
        "x": 2320,
        "y": 300,
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
        "x": 2320,
        "y": 340,
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
        "x": 1800,
        "y": 660,
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
        "x": 210,
        "y": 2060,
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
        "x": 210,
        "y": 2100,
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
        "x": 210,
        "y": 2140,
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
        "x": 210,
        "y": 2180,
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
        "x": 210,
        "y": 2220,
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
        "x": 220,
        "y": 2260,
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
        "x": 210,
        "y": 1900,
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
        "x": 210,
        "y": 1940,
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
        "x": 210,
        "y": 1980,
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
        "x": 210,
        "y": 2020,
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
        "x": 220,
        "y": 2300,
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
        "x": 220,
        "y": 2340,
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
        "x": 750,
        "y": 2060,
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
        "x": 750,
        "y": 2100,
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
        "x": 750,
        "y": 2140,
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
        "x": 750,
        "y": 2180,
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
        "x": 750,
        "y": 2220,
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
        "x": 750,
        "y": 2260,
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
        "x": 750,
        "y": 1900,
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
        "x": 750,
        "y": 1940,
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
        "x": 750,
        "y": 1980,
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
        "x": 750,
        "y": 2020,
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
        "x": 750,
        "y": 2300,
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
        "x": 750,
        "y": 2340,
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
        "x": 2330,
        "y": 580,
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
        "x": 2330,
        "y": 660,
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
        "x": 1260,
        "y": 2060,
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
        "x": 1260,
        "y": 2100,
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
        "x": 1260,
        "y": 2140,
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
        "x": 1260,
        "y": 2180,
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
        "x": 1260,
        "y": 2220,
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
        "x": 1260,
        "y": 2260,
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
        "x": 1260,
        "y": 1900,
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
        "x": 1260,
        "y": 1940,
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
        "x": 1260,
        "y": 1980,
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
        "x": 1260,
        "y": 2020,
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
        "x": 1260,
        "y": 2300,
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
        "x": 1260,
        "y": 2340,
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
        "x": 1760,
        "y": 2060,
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
        "x": 1760,
        "y": 2100,
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
        "x": 1760,
        "y": 2140,
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
        "x": 1760,
        "y": 2180,
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
        "x": 1760,
        "y": 2220,
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
        "x": 1760,
        "y": 2260,
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
        "x": 1760,
        "y": 1900,
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
        "x": 1760,
        "y": 1940,
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
        "x": 1760,
        "y": 1980,
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
        "x": 1760,
        "y": 2020,
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
        "x": 1760,
        "y": 2300,
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
        "x": 1760,
        "y": 2340,
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
        "x": 2300,
        "y": 2060,
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
        "x": 2300,
        "y": 2100,
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
        "x": 2300,
        "y": 2140,
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
        "x": 2300,
        "y": 2180,
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
        "x": 2300,
        "y": 2220,
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
        "x": 2300,
        "y": 2260,
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
        "x": 2300,
        "y": 1900,
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
        "x": 2300,
        "y": 1940,
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
        "x": 2300,
        "y": 1980,
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
        "x": 2300,
        "y": 2020,
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
        "x": 2300,
        "y": 2300,
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
        "x": 2300,
        "y": 2340,
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
        "x": 2820,
        "y": 2060,
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
        "x": 2820,
        "y": 2100,
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
        "x": 2820,
        "y": 2140,
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
        "x": 2820,
        "y": 2180,
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
        "x": 2820,
        "y": 2220,
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
        "x": 2820,
        "y": 2260,
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
        "x": 2820,
        "y": 1900,
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
        "x": 2820,
        "y": 1940,
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
        "x": 2820,
        "y": 1980,
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
        "x": 2820,
        "y": 2020,
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
        "x": 2820,
        "y": 2300,
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
        "x": 2820,
        "y": 2340,
        "wires": [
            []
        ]
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
        "x": 2080,
        "y": 1120,
        "wires": [
            []
        ]
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
        "x": 2070,
        "y": 1160,
        "wires": [
            []
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
        "x": 2070,
        "y": 1200,
        "wires": [
            []
        ]
    },
    {
        "id": "03f7583d587fdc24",
        "type": "serial in",
        "z": "42e46494b8beb695",
        "name": "",
        "serial": "8236ee8772344c42",
        "x": 190,
        "y": 120,
        "wires": [
            [
                "daf379af17a1f571"
            ]
        ]
    },
    {
        "id": "cfd13b593d9f19bb",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_akselerasi_x",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 840,
        "y": 380,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "8e48f52222de25cf",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_akselerasi_y",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 840,
        "y": 420,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "f9b7029f26d5dc44",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_akselerasi_z",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 840,
        "y": 460,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "9ee2122c686f69f0",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_rotasi_x",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 500,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "b097d821a9fb3bd8",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_rotasi_y",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 540,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "25746d16180df351",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_rotasi_z",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 580,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "a503d7f8076c6eb2",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gyro_temperature",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 840,
        "y": 620,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "537063abab1a95e7",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_latitude",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 460,
        "y": 140,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "7bf88b300eb6a1ec",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_longitude",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 470,
        "y": 340,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "2b73b2f4b3746a08",
        "type": "debug",
        "z": "a87d6db468e140d9",
        "name": "debug 35",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 820,
        "y": 60,
        "wires": []
    },
    {
        "id": "ccca8f97bcfce271",
        "type": "join",
        "z": "a87d6db468e140d9",
        "name": "",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": false,
        "timeout": "1",
        "count": "39",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 390,
        "y": 60,
        "wires": [
            [
                "32557b8828d75b21",
                "2b73b2f4b3746a08"
            ]
        ]
    },
    {
        "id": "32557b8828d75b21",
        "type": "function",
        "z": "a87d6db468e140d9",
        "name": "query",
        "func": "let gps_enc             = msg.payload.publish_e_v_ta_gps_enc;\nlet gps_date            = msg.payload.publish_e_v_ta_gps_date;\nlet gps_year            = msg.payload.publish_e_v_ta_gps_year;\nlet gps_month           = msg.payload.publish_e_v_ta_gps_month;\nlet gps_day             = msg.payload.publish_e_v_ta_gps_day;\nlet gps_time            = msg.payload.publish_e_v_ta_gps_time;\nlet gps_time_hour       = msg.payload.publish_e_v_ta_gps_time_hour;\nlet gps_time_min        = msg.payload.publish_e_v_ta_gps_time_min;\nlet gps_time_sec        = msg.payload.publish_e_v_ta_gps_time_sec;\nlet gps_time_cen_sec    = msg.payload.publish_e_v_ta_gps_time_cen_sec;\nlet gps_speed           = msg.payload.publish_e_v_ta_gps_speed;\nlet gps_speed_knots     = msg.payload.publish_e_v_ta_gps_speed_knots;\nlet gps_speed_mph       = msg.payload.publish_e_v_ta_gps_speed_mph;\nlet gps_speed_mps       = msg.payload.publish_e_v_ta_gps_speed_mps;\nlet gps_speed_kmph      = msg.payload.publish_e_v_ta_gps_speed_kmph;\nlet gps_course_raw      = msg.payload.publish_e_v_ta_gps_cour_raw;\nlet gps_course_raw_deg  = msg.payload.publish_e_v_ta_gps_cour_raw_deg;\nlet gps_satelite        = msg.payload.publish_e_v_ta_gps_satelite;\nlet gps_hdop            = msg.payload.publish_e_v_ta_gps_hdop;\nlet latitude            = msg.payload.publish_e_v_ta_latitude;\nlet latitude_raw        = msg.payload.publish_e_v_ta_gps_lat_raw;\nlet latitude_raw_deg    = msg.payload.publish_e_v_ta_gps_lat_raw_deg;\nlet latitude_raw_bill   = msg.payload.publish_e_v_ta_gps_lat_raw_bill;\nlet longitude           = msg.payload.publish_e_v_ta_longitude;\nlet longitude_raw       = msg.payload.publish_e_v_ta_gps_long_raw;\nlet longitude_raw_deg   = msg.payload.publish_e_v_ta_gps_long_deg;\nlet longitude_raw_bill  = msg.payload.publish_e_v_ta_gps_long_bill;\nlet altitude            = msg.payload.publish_e_v_ta_altitude;\nlet altitude_meter      = msg.payload.publish_e_v_ta_gps_alt_meter;\nlet altitude_mil        = msg.payload.publish_e_v_ta_gps_alt_mil;\nlet altitude_km         = msg.payload.publish_e_v_ta_gps_alt_km;\nlet altitude_feet       = msg.payload.publish_e_v_ta_gps_alt_feet;\nlet gyro_aks_x          = msg.payload.publish_e_v_ta_gyro_akselerasi_x;\nlet gyro_aks_y          = msg.payload.publish_e_v_ta_gyro_akselerasi_y;\nlet gyro_aks_z          = msg.payload.publish_e_v_ta_gyro_akselerasi_z;\nlet gyro_rts_x          = msg.payload.publish_e_v_ta_gyro_rotasi_x;\nlet gyro_rts_y          = msg.payload.publish_e_v_ta_gyro_rotasi_y;\nlet gyro_rts_z          = msg.payload.publish_e_v_ta_gyro_rotasi_z;\nlet gyro_temperature    = msg.payload.publish_e_v_ta_gyro_temperature;\n\nmsg.topic = 'INSERT INTO table_data(id, gps_encode, gps_date, gps_year, gps_month, gps_day, gps_time, gps_time_hour, gps_time_minute, gps_time_second, gps_time_centi_second, gps_speed, gps_speed_knots, speed_mph, speed_mps, speed_kmph, gps_course_raw, gps_course_raw_deg, gps_satelite, gps_hdop, latitude, latitude_raw, latitude_raw_deg, latitude_raw_bill, longitude, longitude_raw, longitude_raw_deg, longitude_raw_bill, altitude, altitude_meter, altitude_mil, altitude_km, altitude_feet, akseleration_x, akseleration_y, akseleration_z, rotation_x, rotation_y, rotation_z, gyro_temp, date, time, device) values(null, $val1, $val2, $val3, $val4, $val5, $val6, $val7, $val8, $val9, $val10, $val11, $val12, $val13, $val14, $val15, $val16, $val17, $val18, $val19, $val20, $val21, $val22, $val23, $val24, $val25, $val26, $val27, $val28, $val29, $val30, $val31, $val32, $val33, $val34, $val35, $val36, $val37, $val38, $val39, date(\"now\"),time(\"now\"), \"Alat-Params\");'\nmsg.payload = [gps_enc, gps_date, gps_year, gps_month, gps_day, gps_time, gps_time_hour, gps_time_min, gps_time_sec, gps_time_cen_sec, gps_speed, gps_speed_knots, gps_speed_mph, gps_speed_mps, gps_speed_kmph, gps_course_raw, gps_course_raw_deg, gps_satelite, gps_hdop, latitude, latitude_raw, latitude_raw_deg, latitude_raw_bill, longitude, longitude_raw, longitude_raw_deg, longitude_raw_bill, altitude, altitude_meter, altitude_mil, altitude_km, altitude_feet, gyro_aks_x, gyro_aks_y, gyro_aks_z, gyro_rts_x, gyro_rts_y, gyro_rts_z, gyro_temperature]\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 510,
        "y": 60,
        "wires": [
            [
                "1c30e3bfdd1eac7f"
            ]
        ]
    },
    {
        "id": "0e185e33710342d1",
        "type": "comment",
        "z": "a87d6db468e140d9",
        "name": "",
        "info": "Plot data kecepatan terhadap waktu, \nplot data kemiringan terhadap waktu dan jarak, \nplot data jarak terhadap waktu, \n\nplot data konsumsi baterai terhadap waktu dan jarak",
        "x": 100,
        "y": 100,
        "wires": []
    },
    {
        "id": "1c30e3bfdd1eac7f",
        "type": "sqlite",
        "z": "a87d6db468e140d9",
        "mydb": "7bf32b52225edc02",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "TA_Database",
        "x": 660,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "f6316c3f463818e0",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_altitude",
        "qos": "2",
        "datatype": "utf8",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 800,
        "y": 140,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "727a3729d03d8b37",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_enc",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 140,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "c313b25eb60f74e5",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_date",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 180,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "f7c469c93bb97382",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_year",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 220,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "28a23bdb02a98f53",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_month",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 260,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "256d9dd54c653383",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_day",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 300,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "1bae9ff6d84c4d08",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_time",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 340,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "f74dbe3b82e29e97",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_time_hour",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 170,
        "y": 380,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "7e516462fbe6e5a9",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_time_min",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 420,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "3c7e6e3fe48a38b5",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_time_sec",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 460,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "9e534c99ae9ab412",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_time_cen_sec",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 180,
        "y": 500,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "2cf35ec3ac35beb3",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_lat_raw",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 480,
        "y": 180,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "592d874e36f92adf",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_lat_raw_deg",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 490,
        "y": 220,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "cded48faa2182f5b",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_lat_raw_bill",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 490,
        "y": 260,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "c3902693f7f832ab",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_long_raw",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 480,
        "y": 380,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "13e6ac978cac66b5",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_long_deg",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 480,
        "y": 420,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "514c71906db173fe",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_long_bill",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 480,
        "y": 460,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "d36d5213aa53badb",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_alt_meter",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 830,
        "y": 180,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "f8be6c3bb1c0bf1c",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_alt_mil",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 220,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "2f578d3c071b6c3b",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_alt_km",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 260,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "6e9c09b44d0678f5",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_alt_feet",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 820,
        "y": 300,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "4dbe731b5f6d53a6",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_speed",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 540,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "b0b4d82437f84b53",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_speed_knots",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 180,
        "y": 580,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "f0956b4845862826",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_speed_mph",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 170,
        "y": 620,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "69138295ce9bb510",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_speed_mps",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 170,
        "y": 660,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "c0335bc594f13cfc",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_speed_kmph",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 180,
        "y": 700,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "38a48a2732471154",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_cour_raw",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 740,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "df5703b5690c8145",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_cour_raw_deg",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 180,
        "y": 780,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "c81927f9f3de530f",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_satelite",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 160,
        "y": 820,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    },
    {
        "id": "cf94971b48fa50c3",
        "type": "mqtt in",
        "z": "a87d6db468e140d9",
        "name": "",
        "topic": "publish_e_v_ta_gps_hdop",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b7fb6e4682c52d9e",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 150,
        "y": 860,
        "wires": [
            [
                "ccca8f97bcfce271"
            ]
        ]
    }
]
