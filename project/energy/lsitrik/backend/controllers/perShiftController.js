const PerShiftKub = require('../models/activePowerModel');

exports.getAll = (req, res) => {
    const dbName = req.query.db;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }

    PerShiftKub.getAll(dbName, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByShift = (req, res) => {
    const dbName = req.query.db;
    const shift = req.params.shift;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }

    PerShiftKub.getByShift(dbName, shift, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByDay = (req, res) => {
    const dbName = req.query.db;
    const day = req.params.day;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }
    if (isNaN(day)) {
        return res.status(400).json({ error: "Invalid day parameter. Day must be a number." });
    }

    PerShiftKub.getByDay(dbName, day, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByWeek = (req, res) => {
    const dbName = req.query.db;
    const week = req.params.week;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }
    if (isNaN(week)) {
        return res.status(400).json({ error: "Invalid week parameter. Week must be a number." });
    }

    PerShiftKub.getByWeek(dbName, week, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByMonth = (req, res) => {
    const dbName = req.query.db;
    const month = req.params.month;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }

    PerShiftKub.getByMonth(dbName, month, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

exports.getByYear = (req, res) => {
    const dbName = req.query.db;
    const year = req.params.year;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }
    if (isNaN(year)) {
        return res.status(400).json({ error: "Invalid year parameter. Year must be a number." });
    }

    PerShiftKub.getByYear(dbName, year, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
