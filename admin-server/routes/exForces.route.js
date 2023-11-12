const express = require('express');
const { getForces,saveForces,getSingleForces,updateForces,deleteForces } = require('../controllers/exForcesController');
const router = express.Router();

router.get('/ex-forces', getForces);
router.get('/ex-forces/:id', getSingleForces);
router.put('/update-ex-forces/:id', updateForces);
router.delete('/delete-ex-forces/:id', deleteForces);
router.post('/save-ex-forces', saveForces);

module.exports = router;