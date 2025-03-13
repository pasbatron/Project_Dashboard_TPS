const mysql = require('mysql2');

const databaseNames = [
    'db_balance_shaft_1',
    'db_balance_shaft_2',
    'db_camphousing_ab',
    'db_camphousing_cd',
    'db_camphousing_ef',
    'db_camphousing_saa',
    'db_camphousing_sab',
    'db_camphousing_sac',
    'db_common_rail_1',
    'db_common_rail_2',
    'db_common_rail_3',
    'db_common_rail_4',
    'db_common_rail_5',
    'db_common_rail_6',
    'db_common_rail_7',
    'db_common_rail_8',
    'db_common_rail_9',
    'db_common_rail_10',
    'db_common_rail_11',
    'db_common_rail_12',
    'db_energy_area_compressor',
    'db_energy_facility',
    'db_energy_lpf3',
    'db_retainer',
    'db_roller_arm',
    'db_energy_qg_ct',
    'db_energy_hla',
    'db_energy_lp_mtcr',
    'db_energy_lp_lt_2',
    'db_energy_lp_f_2',
    'db_energy_qad',
    'db_energy_tps',
    'db_energy_w_utility',
    'db_energy_security',
    'db_energy_obeya',
    'db_energy_connector',
    'db_camphousing_cc234',
];

const databases = {};

// Buat koneksi untuk setiap database
databaseNames.forEach((dbName) => {
    databases[dbName] = mysql.createPool({
        host: 'localhost',
        user: 'wandaadii',
        password: 'pasbatron',
        database: dbName,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    databases[dbName].getConnection((err) => {
        if (err) {
            // console.error(`❌ Error connecting to ${dbName}:`, err.message);
        } else {
            console.log(`✅ Connected to ${dbName}`);
            connection.release(); // Kembalikan koneksi ke pool
        }
    });
});

module.exports = databases;
