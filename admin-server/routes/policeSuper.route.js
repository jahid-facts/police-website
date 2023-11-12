const express = require('express');
const { getPoliceSuper,savePoliceSuper,getSinglePoliceSuper,updatePoliceSuper,deletePoliceSuper } = require('../controllers/policeSuperController');
const router = express.Router();

router.get('/police-super', getPoliceSuper);
router.get('/police-super/:id', getSinglePoliceSuper);
router.put('/update-police-super/:id', updatePoliceSuper);
router.delete('/delete-police-super/:id', deletePoliceSuper);
router.post('/save-police-super', savePoliceSuper);

module.exports = router;