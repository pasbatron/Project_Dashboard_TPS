const dbConnections = require('../config/db');

const actualTotalKwhPanelModel = {
    getAll: (dbName, tableName, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    getByShift: (dbName, tableName, shift, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} WHERE shift = ? ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, [shift], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    getByDay: (dbName, tableName, day, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} WHERE day = ? ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, [day], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    getByWeek: (dbName, tableName, week, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} WHERE week = ? ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, [week], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    getByMonth: (dbName, tableName, month, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} WHERE month = ? ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, [month], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    getByYear: (dbName, tableName, year, callback) => {
        const db = dbConnections[dbName];
        if (!db) return callback(new Error("Database not found"), null);

        const sql = `SELECT * FROM ${tableName} WHERE year = ? ORDER BY idPrimary DESC LIMIT 1`;
        db.query(sql, [year], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    }
};

module.exports = actualTotalKwhPanelModel;
