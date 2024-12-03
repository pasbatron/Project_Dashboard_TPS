

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

// Look up line info from mapping table
if (lineMapping[line_id]) {
    line_name = lineMapping[line_id].name;
    pg = lineMapping[line_id].pg;
    
    // Build SQL query
    msg.topic = "INSERT INTO table_all_montiv (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) values(null, '" + 
        line_id + "','" + pg + "', '" + line_name + "', '" + name_product + "', '" + target + "', '" + actual + "', '" + 
        loading_time + "', '" + efficiency + "', '" + delay + "','" + cycle_time + "','" + status_montiv + "', '" + 
        time_trouble + "', '" + time_trouble_quality + "', '" + andon + "');";
} else {
    // Handle unknown line_id
    return null;
}

return msg;