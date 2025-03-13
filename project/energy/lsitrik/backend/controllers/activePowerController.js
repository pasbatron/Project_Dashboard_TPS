const ActivePower = require('../models/activePowerModel');

exports.getLastKub = (req, res) => {
    const dbName = req.query.db;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }

    ActivePower.getLastKub(dbName, (err, results) => {
        if (err) {
            console.error(`Error executing query on ${dbName}:`, err.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(200).json({ message: "Success", data: results });
    });
};
