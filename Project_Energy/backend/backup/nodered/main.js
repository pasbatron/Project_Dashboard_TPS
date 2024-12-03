const lineData = {
    "1": {name: "Common Rail 1", pg: "PG2.2"},
    "2": {name: "Common Rail 2", pg: "PG2.2"},
    "3": {name: "Common Rail 3", pg: "PG2.2"}, 
    "4": {name: "Common Rail 4", pg: "PG2.1"},
    "5": {name: "Common Rail 5", pg: "PG2.2"},
    "6": {name: "Common Rail 6", pg: "PG2.1"},
    "7": {name: "Common Rail 7", pg: "PG2.2"},
    "8": {name: "Common Rail 8", pg: "PG2.2"},
    "9": {name: "Common Rail 9", pg: "PG2.1"},
    "10": {name: "Common Rail 10", pg: "PG2.1"},
    "11": {name: "Common Rail 11", pg: "PG2.1"},
    "12": {name: "Common Rail 12", pg: "PG2.3"},
    "13": {name: "Common Rail 13", pg: "PG2.3"},
    "13A": {name: "Cam housing A", pg: "PG2.3"},
    "13B": {name: "Cam housing B", pg: "PG2.3"},
    "14": {name: "Cam housing", pg: "PG2.3"},
    "14A": {name: "Cam housing C", pg: "PG2.3"},
    "14B": {name: "Cam housing D", pg: "PG2.3"},
    "15": {name: "Cam housing", pg: "PG2.3"},
    "15A": {name: "Cam housing E NR", pg: "PG2.3"},
    "15B": {name: "Cam housing E D05E", pg: "PG2.3"},
    "16": {name: "Cam housing Assy A", pg: "PG2.3"},
    "17": {name: "Cam housing Assy B", pg: "PG2.3"},
    "18": {name: "Cam housing Assy", pg: "PG2.3"},
    "18A": {name: "Cam housing Assy C NR", pg: "PG2.3"},
    "18B": {name: "Cam housing Assy C D05E", pg: "PG2.3"},
    "19": {name: "Cam Cap 1A", pg: "PG2.3"},
    "20": {name: "Cam Cap 1B", pg: "PG2.3"},
    "21": {name: "Cam Cap", pg: "PG2.3"},
    "21A": {name: "Cam Cap 1C NR", pg: "PG2.3"},
    "21B": {name: "Cam Cap 1C D05E", pg: "PG2.3"},
    "22": {name: "Cam Cap", pg: "PG2.3"},
    "22A": {name: "Cam Cap 2 2MP", pg: "PG2.3"},
    "22B": {name: "Cam Cap 2 3MP", pg: "PG2.3"},
    "22C": {name: "Cam Cap 2 4MP", pg: "PG2.3"},
    "22D": {name: "Cam Cap 2 5MP", pg: "PG2.3"},
    "23": {name: "Cam Cap", pg: "PG2.3"},
    "23A": {name: "Cam Cap 3 2MP", pg: "PG2.3"},
    "23B": {name: "Cam Cap 3 3MP", pg: "PG2.3"},
    "23C": {name: "Cam Cap 3 4MP", pg: "PG2.3"},
    "23D": {name: "Cam Cap 3 5MP", pg: "PG2.3"},
    "24": {name: "Cam Cap", pg: "PG2.3"},
    "24A": {name: "Cam Cap 4 2MP", pg: "PG2.3"},
    "24B": {name: "Cam Cap 4 3MP", pg: "PG2.3"},
    "24C": {name: "Cam Cap 4 4MP", pg: "PG2.3"},
    "24D": {name: "Cam Cap 4 5MP", pg: "PG2.3"},
    "25": {name: "Cam Cap 2 & 3 D05E", pg: "PG2.3"},
    "26": {name: "Retainer", pg: "PG1.1"},
    "26A": {name: "Retainer", pg: "PG1.1"},
    "27": {name: "Connector", pg: "PG1.1"},
    "27A": {name: "Spacer", pg: "PG1.1"},
    "27B": {name: "Drive Gear", pg: "PG1.1"},
    "27C": {name: "Spacer Drive Gear", pg: "PG1.1"},
    "28": {name: "Housing", pg: "PG1.1"},
    "28A": {name: "Housing Inlet TR", pg: "PG1.1"},
    "28B": {name: "Housing Inlet D13E", pg: "PG1.1"},
    "29": {name: "Balance Shaft NO 1", pg: "PG1.1"},
    "29A": {name: "Balance Shaft NO 2", pg: "PG1.1"},
    "30": {name: "Roller Arm 1", pg: "PG1.1"},
    "30A": {name: "Roller Arm 1 A", pg: "PG1.1"},
    "30B": {name: "Roller Arm 1 B", pg: "PG1.1"},
    "30C": {name: "Roller Arm 1 C", pg: "PG1.1"},
    "30D": {name: "Roller Arm 1 D", pg: "PG1.1"},
    "30E": {name: "Roller Arm 1 E", pg: "PG1.1"},
    "31": {name: "Roller Arm 2", pg: "PG1.1"},
    "31A": {name: "Roller Arm 2 A", pg: "PG1.1"},
    "31B": {name: "Roller Arm 2 B", pg: "PG1.1"},
    "31C": {name: "Roller Arm 2 C", pg: "PG1.1"},
    "31D": {name: "Roller Arm 2 D", pg: "PG1.1"},
    "31E": {name: "Roller Arm 2 E", pg: "PG1.1"},
    "32": {name: "Hydraulic Lash Adjuster", pg: "PG1.1"},
    "32A": {name: "Hydraulic Lash Adjuster A", pg: "PG1.1"},
    "32B": {name: "Hydraulic Lash Adjuster B", pg: "PG1.1"},
    "32C": {name: "Hydraulic Lash Adjuster C", pg: "PG1.1"},
    "32D": {name: "Hydraulic Lash Adjuster D", pg: "PG1.1"},
    "32E": {name: "Hydraulic Lash Adjuster E", pg: "PG1.1"},
    "33": {name: "Housing Inlet Water", pg: "PG1.1"},
    "34": {name: "Packing IMV", pg: "PG1.1"},
    "34A": {name: "Packing IMV 1", pg: "PG1.2"},
    "34B": {name: "Packing IMV 2", pg: "PG1.2"},
    "34C": {name: "Packing IMV 3", pg: "PG1.2"},
    "34D": {name: "Packing IMV 4", pg: "PG1.2"},
    "34E": {name: "Packing IMV 5", pg: "PG1.2"},
    "34F": {name: "Packing IMV 6", pg: "PG1.2"},
    "34G": {name: "Packing IMV 7", pg: "PG1.2"},
    "34H": {name: "Packing IMV 8", pg: "PG1.2"},
    "34I": {name: "Packing IMV 9", pg: "PG1.2"},
    "34J": {name: "Packing IMV 10", pg: "PG1.2"},
    "34K": {name: "Packing IMV 11", pg: "PG1.2"},
    "34L": {name: "Packing IMV 12", pg: "PG1.2"},
    "34M": {name: "Packing IMV 13", pg: "PG1.2"},
    "34N": {name: "Packing IMV 14", pg: "PG1.2"},
    "34O": {name: "Packing IMV 15", pg: "PG1.2"},
    "34P": {name: "Packing IMV 16", pg: "PG1.2"},
    "34Q": {name: "Packing IMV 17", pg: "PG1.2"},
    "34R": {name: "Packing IMV 18", pg: "PG1.2"},
    "35": {name: "Packing Common Rail", pg: "PG1.2"}
};

const line_id = msg.payload[0];
const name_product = msg.payload[1];
const target = msg.payload[2];
const actual = msg.payload[3];
const loading_time = msg.payload[4];
const efficiency = msg.payload[5];
const delay = msg.payload[6];
const cycle_time = msg.payload[7];
const status_montiv = msg.payload[8];
const time_trouble = msg.payload[9];
const time_trouble_quality = msg.payload[10];
const andon = msg.payload[11];

if (lineData[line_id]) {
    const lineInfo = lineData[line_id];
    const line_name = lineInfo.name;
    const pg = lineInfo.pg;

    msg.topic = `
        INSERT INTO table_all_montiv 
        (id, line_id, pg, line_name, name_product, target, actual, loading_time, efficiency, delay, cycle_time, status, time_trouble, time_trouble_quality, andon) 
        VALUES 
        (null, '${line_id}', '${pg}', '${line_name}', '${name_product}', '${target}', '${actual}', '${loading_time}', '${efficiency}', '${delay}', '${cycle_time}', '${status_montiv}', '${time_trouble}', '${time_trouble_quality}', '${andon}');
    `;
} else {
    msg.topic = "Invalid line_id";
}
