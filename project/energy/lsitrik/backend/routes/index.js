const express = require('express');
const router = express.Router();
const activePowerController = require('../controllers/activePowerController');
const perShiftKubController = require('../controllers/perShiftController');
const actualTotalKwhPanelController = require('../controllers/actualTotalKwhPanelController');



// Middleware validasi dbName (hanya diterapkan di route yang butuh)
const validateDbName = (req, res, next) => {
    const dbName = req.query.db;
    if (!dbName) {
        return res.status(400).json({ error: "Database parameter is required" });
    }
    next();
};

// ✅ Active Power (Tanpa Validasi dbName)
router.get('/api/last_kub', activePowerController.getLastKub);

// ✅ Per Shift Kubikal (Dengan Validasi dbName)
router.get('/api/tb_pershift_kub', validateDbName, perShiftKubController.getAll);
router.get('/api/tb_pershift_kub/shift/:shift', validateDbName, perShiftKubController.getByShift);
router.get('/api/tb_pershift_kub/day/:day', validateDbName, perShiftKubController.getByDay);
router.get('/api/tb_pershift_kub/week/:week', validateDbName, perShiftKubController.getByWeek);
router.get('/api/tb_pershift_kub/month/:month', validateDbName, perShiftKubController.getByMonth);
router.get('/api/tb_pershift_kub/year/:year', validateDbName, perShiftKubController.getByYear);

// ✅ Actual Total KWh Panel (Dengan Validasi dbName + Parameter tableName)
router.get('/api/actual_total_kwh_panel/:tableName', validateDbName, actualTotalKwhPanelController.getAll);
router.get('/api/actual_total_kwh_panel/:tableName/shift/:shift', validateDbName, actualTotalKwhPanelController.getByShift);
router.get('/api/actual_total_kwh_panel/:tableName/day/:day', validateDbName, actualTotalKwhPanelController.getByDay);
router.get('/api/actual_total_kwh_panel/:tableName/week/:week', validateDbName, actualTotalKwhPanelController.getByWeek);
router.get('/api/actual_total_kwh_panel/:tableName/month/:month', validateDbName, actualTotalKwhPanelController.getByMonth);
router.get('/api/actual_total_kwh_panel/:tableName/year/:year', validateDbName, actualTotalKwhPanelController.getByYear);





module.exports = router;



// http://192.168.239.225:3000/api/actual_total_kwh_panel/tb_total_kwh_pm200?db=db_retainer
// http://192.168.239.225:3000/api/actual_pershift/tb_pershift_pm200?db=db_retainer
