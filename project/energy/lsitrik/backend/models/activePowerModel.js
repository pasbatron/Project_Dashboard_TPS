const databases = require('../config/db');

const activePowerModel = {
    getLastKub: (dbName, callback) => {
        const db = databases[dbName];
        if (!db) {
            return callback(new Error(`Database ${dbName} not found`), null);
        }

        const sql = 'SELECT * FROM tb_active_power ORDER BY idPrimary DESC LIMIT 300';
        db.query(sql, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
};

module.exports = activePowerModel;
