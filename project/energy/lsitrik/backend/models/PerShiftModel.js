const dbConnections = require('../config/db');

const PerShiftModel = {
    getAll: (dbName, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub';
        db.query(sql, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getByShift: (dbName, shift, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub WHERE shift = ?';
        db.query(sql, [shift], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getByDay: (dbName, day, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub WHERE day = ?';
        db.query(sql, [day], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getByWeek: (dbName, week, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub WHERE week = ?';
        db.query(sql, [week], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getByMonth: (dbName, month, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub WHERE month = ?';
        db.query(sql, [month], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },
    getByYear: (dbName, year, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = 'SELECT * FROM tb_pershift_kub WHERE year = ?';
        db.query(sql, [year], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
};

module.exports = PerShiftModel;
