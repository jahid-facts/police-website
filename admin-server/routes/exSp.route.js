const express = require('express');
const { getExSp,saveExSp,getSingleExSp,updateExSp,deleteExSp } = require('../controllers/exSpController');
const router = express.Router();

router.get('/ex-sp', getExSp);
router.get('/ex-sp/:id', getSingleExSp);
router.put('/update-ex-sp/:id', updateExSp);
router.delete('/delete-ex-sp/:id', deleteExSp);
router.post('/save-ex-sp', saveExSp);

module.exports = router;