const express = require('express');
const { getExSp,saveExSp,getSingleExSp,updateExSp,deleteExSp } = require('../controllers/exPoliceSuperController');
const router = express.Router();

router.get('/ex-police-super', getExSp);
router.get('/ex-police-super/:id', getSingleExSp);
router.put('/update-ex-police-super/:id', updateExSp);
router.delete('/delete-ex-police-super/:id', deleteExSp);
router.post('/save-ex-police-super', saveExSp);

module.exports = router;