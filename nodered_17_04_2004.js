var line
var target
var actual
var loading_time
var efficiency
var delay
var status
var cycle_time
var time_trouble
var name_hikitori
var cycle_time
var time_begin
var time_finish
var loading_time
var status_hikitori
var name_product
var andon
var time_trouble_quality
var line_name
var status_montiv


if (msg.payload[0] == "1") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 1'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_1(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"



} else if (msg.payload[0] == "2") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 2'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_2(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"



} else if (msg.payload[0] == "3") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 3'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_3(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "','" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"



} else if (msg.payload[0] == "4") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 4'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_4(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "5") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 5'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_5(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "6") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 6'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_6(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "7") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 7'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_7(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "8") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 8'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_8(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "9") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 9'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_9(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "10") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 10'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_10(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "11") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 11'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_11(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"

} else if (msg.payload[0] == "12") {
    line = msg.payload[0]
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
    line_name = 'Common Rail 12'
    // query__________________________
    msg.topic = "INSERT INTO table_common_rail_12(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "'); INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}
else if (msg.payload[0] == "13") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "13A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "13B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}
else if (msg.payload[0] == "14") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "14A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "14B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "15") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "15A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "15B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "16") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "17") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "18") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "18A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "18B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "19") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "20") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "21") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "21A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "21B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "22") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "22A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "22B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "22C") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "22D") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "23") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "23A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "23B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "23C") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "23D") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "24") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "24A") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "24B") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "24C") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "24D") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "25") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "26") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
} else if (msg.payload[0] == "27") {
    line = msg.payload[0]
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
    line_name = 'Progress'
    // query__________________________
    msg.topic = "INSERT INTO table_all_transit(id, line_id, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + line + "', '" + line_name + "' '" + name_product + "', '" + target + "', '" + actual + "', '" + loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');"
}







else {
    msg.topic = "INSERT INTO table_spam(id , data1 , data2 , data3 , data4 , data5 , data6 , data7 , data8 , data9 , data10 , data11 , data12 , data13 , data14 , data15 , data16 , data17 , data18 , data19 , data20 , data21 , data22 , data23 , data24 , data25) values(null, '" + msg.payload[0] + "', '" + msg.payload[1] + "', '" + msg.payload[2] + "', '" + msg.payload[3] + "', '" + msg.payload[4] + "', '" + msg.payload[5] + "','" + msg.payload[6] + "', '" + msg.payload[7] + "', '" + msg.payload[8] + "', '" + msg.payload[9] + "', '" + msg.payload[10] + "', '" + msg.payload[11] + "', '" + msg.payload[12] + "', '" + msg.payload[13] + "', '" + msg.payload[14] + "', '" + msg.payload[15] + "', '" + msg.payload[16] + "', '" + msg.payload[17] + "', '" + msg.payload[18] + "', '" + msg.payload[19] + "', '" + msg.payload[20] + "', '" + msg.payload[21] + "', '" + msg.payload[22] + "', '" + msg.payload[23] + "', '" + msg.payload[24] + "');"
}
return msg;
