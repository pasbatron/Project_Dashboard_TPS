if (measurementToTableMap[msg.measurement_type]) {
    const tableName = measurementToTableMap[msg.measurement_type];
    msg.topic = `INSERT INTO ${tableName} (register, item, value) VALUES ('register_${msg.measurement_type.split('_')[0]}', 'item_${msg.measurement_type.split('_')[0]}', '${msg.value}')`;
    console.log("Generated SQL:", msg.topic);
}
return msg;
