const express = require('express');
const { getUnits,saveUnits,getSingleUnits,updateUnits,deleteUnits } = require('../controllers/unitsController');
const router = express.Router();

router.get('/units', getUnits);
router.get('/units/:id', getSingleUnits);
router.put('/update-units/:id', updateUnits);
router.delete('/delete-units/:id', deleteUnits);
router.post('/save-units', saveUnits);

module.exports = router;