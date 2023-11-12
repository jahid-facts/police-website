const express = require('express');
const { getSubUnits,saveSubUnits,getSingleSubUnits,updateSubUnits,deleteSubUnits,getSubUnitsCircle, getSubUnitsThana } = require('../controllers/subUnitsController');
const router = express.Router();

router.get('/sub-units', getSubUnits);
router.get('/sub-units-circle', getSubUnitsCircle);
router.get('/sub-units-thana', getSubUnitsThana);
router.get('/sub-units/:id', getSingleSubUnits);
router.put('/update-sub-units/:id', updateSubUnits);
router.delete('/delete-sub-units/:id', deleteSubUnits);
router.post('/save-sub-units', saveSubUnits);

module.exports = router;