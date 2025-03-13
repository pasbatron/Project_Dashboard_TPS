const ActualTotalKwhPanel = require('../models/actualTotalKwhPanelModel');

exports.getAll = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    if (!dbName || !tableName) {
        return res.status(400).json({ error: "Database and table parameters are required" });
    }

    ActualTotalKwhPanel.getAll(dbName, tableName, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByShift = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    const shift = req.params.shift;
    if (!dbName || !tableName) {
        return res.status(400).json({ error: "Database and table parameters are required" });
    }

    ActualTotalKwhPanel.getByShift(dbName, tableName, shift, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByDay = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    const day = req.params.day;
    if (!dbName || !tableName || isNaN(day)) {
        return res.status(400).json({ error: "Invalid parameters" });
    }

    ActualTotalKwhPanel.getByDay(dbName, tableName, day, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByWeek = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    const week = req.params.week;
    if (!dbName || !tableName || isNaN(week)) {
        return res.status(400).json({ error: "Invalid parameters" });
    }

    ActualTotalKwhPanel.getByWeek(dbName, tableName, week, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByMonth = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    const month = req.params.month;
    if (!dbName || !tableName) {
        return res.status(400).json({ error: "Database and table parameters are required" });
    }

    ActualTotalKwhPanel.getByMonth(dbName, tableName, month, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByYear = (req, res) => {
    const dbName = req.query.db;
    const tableName = req.params.tableName;
    const year = req.params.year;
    if (!dbName || !tableName || isNaN(year)) {
        return res.status(400).json({ error: "Invalid parameters" });
    }

    ActualTotalKwhPanel.getByYear(dbName, tableName, year, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
