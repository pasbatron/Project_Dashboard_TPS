var line_id
var name_product
var target
var actual
var loading_time
var efficiency
var delay
var cycle_time
var status_montiv
var loading_time
var status_hikitori
var time_trouble
var time_trouble_quality
var andon
var line_name
var pg


line_id = msg.payload[0]
name_product = msg.payload[1]
target = msg.payload[2]
actual = msg.payload[3]
loading_time = msg.payload[4]
efficiency = msg.payload[5]
delay = msg.payload[6]
cycle_time = msg.payload[7]
status_montiv = msg.payload[8]
time_trouble = msg.payload[9]
time_trouble_quality = msg.payload[10]
andon = msg.payload[11]






if (line_id == "1") {
    line_name = 'Common Rail 1'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "2") {
    line_name = 'Common Rail 2'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "3") {

    line_name = 'Common Rail 3'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "4") {
    line_name = 'Common Rail 4'
    pg = 'PG2.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "5") {

    line_name = 'Common Rail 5'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "6") {
    line_name = 'Common Rail 6'
    pg = 'PG2.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "7") {
    line_name = 'Common Rail 7'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "8") {
    line_name = 'Common Rail 8'
    pg = 'PG2.2'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "9") {
    line_name = 'Common Rail 9'
    pg = 'PG2.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "10") {
    line_name = 'Common Rail 10'
    pg = 'PG2.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "11") {
    line_name = 'Common Rail 11'
    pg = 'PG2.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "12") {
    line_name = 'Common Rail 12'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "13") {
    line_name = 'Common Rail 13'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}
else if (line_id == "13A") {
    line_name = 'Cam housing A'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}
else if (line_id == "13B") {
    line_name = 'Cam housing B'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}

else if (line_id == "14") {
    line_name = 'Cam housing'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "14A") {
    line_name = 'Cam housing C'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "14B") {
    line_name = 'Cam housing D'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "15") {
    line_name = 'Cam housing'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "15A") {
    line_name = 'Cam housing E NR'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "15B") {
    line_name = 'Cam housing E D05E'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "16") {
    line_name = 'Cam housing Assy A'
    pg = 'PG2.3'
}

else if (line_id == "17") {
    line_name = 'Cam housing Assy B'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "18") {
    line_name = 'Cam housing Assy'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "18A") {
    line_name = 'Cam housing Assy C NR'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "18B") {
    line_name = 'Cam housing Assy C D05E'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "19") {
    line_name = 'Cam Cap 1A'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "20") {
    line_name = 'Cam Cap 1B'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "21") {
    line_name = 'Cam Cap'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}
else if (line_id == "21A") {
    line_name = 'Cam Cap 1C NR'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "21B") {
    line_name = 'Cam Cap 1C D05E'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "22") {
    line_name = 'Cam Cap'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "22A") {
    line_name = 'Cam Cap 2 2MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "22B") {
    line_name = 'Cam Cap 2 3MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "22C") {
    line_name = 'Cam Cap 2 4MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "22D") {
    line_name = 'Cam Cap 2 5MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "23") {
    line_name = 'Cam Cap'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "23A") {
    line_name = 'Cam Cap 3 2MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "23B") {
    line_name = 'Cam Cap 3 3MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "23C") {
    line_name = 'Cam Cap 3 4MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "23D") {
    line_name = 'Cam Cap 3 5MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "24") {
    line_name = 'Cam Cap'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "24A") {
    line_name = 'Cam Cap 4 2MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "24B") {
    line_name = 'Cam Cap 4 3MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "24C") {
    line_name = 'Cam Cap 4 4MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "24D") {
    line_name = 'Cam Cap 4 5MP'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "25") {
    line_name = 'Cam Cap 2 & 3 D05E'
    pg = 'PG2.3'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "26") {
    line_name = 'Retainer'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "27") {
    line_name = 'Connector'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "27A") {
    line_name = 'Spacer'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "27B") {
    line_name = 'Drive Gear'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "27C") {
    line_name = 'Spacer Drive Gear'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "28") {
    line_name = 'Housing'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "28A") {
    line_name = 'Housing Inlet TR '
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "28B") {
    line_name = 'Housing Inlet D13E'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}


else if (line_id == "29") {
    line_name = 'Balance Shaft NO 1'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "29A") {
    line_name = 'Balance Shaft NO 2'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "30") {
    line_name = 'Roller Arm 1'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "30A") {
    line_name = 'Roller Arm 1 A'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "30B") {
    line_name = 'Roller Arm 1 B'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "30C") {
    line_name = 'Roller Arm 1 C'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "30D") {
    line_name = 'Roller Arm 1 D'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "30E") {
    line_name = 'Roller Arm 1 E'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else if (line_id == "31") {
    line_name = 'Roller Arm 2'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "31A") {
    line_name = 'Roller Arm 2 A'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "31B") {
    line_name = 'Roller Arm 2 B'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "31C") {
    line_name = 'Roller Arm 2 C'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "31D") {
    line_name = 'Roller Arm 2 D'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (line_id == "31E") {
    line_name = 'Roller Arm 2 E'
    pg = 'PG1.1'
    msg.topic = "INSERT INTO 00_table_all_transit(id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

}

else {
    msg.topic = "INSERT INTO table_spam(id , data1 , data2 , data3 , data4 , data5 , data6 , data7 , data8 , data9 , data10 , data11 , data12 , data13 , data14 , data15 , data16 , data17 , data18 , data19 , data20 , data21 , data22 , data23 , data24 , data25) values(null, '" + msg.payload[0] + "', '" + msg.payload[1] + "', '" + msg.payload[2] + "', '" + msg.payload[3] + "', '" + msg.payload[4] + "', '" + msg.payload[5] + "','" + msg.payload[6] + "', '" + msg.payload[7] + "', '" + msg.payload[8] + "', '" + msg.payload[9] + "', '" + msg.payload[10] + "', '" + msg.payload[11] + "', '" + msg.payload[12] + "', '" + msg.payload[13] + "', '" + msg.payload[14] + "', '" + msg.payload[15] + "', '" + msg.payload[16] + "', '" + msg.payload[17] + "', '" + msg.payload[18] + "', '" + msg.payload[19] + "', '" + msg.payload[20] + "', '" + msg.payload[21] + "', '" + msg.payload[22] + "', '" + msg.payload[23] + "', '" + msg.payload[24] + "');"
}
return msg;
