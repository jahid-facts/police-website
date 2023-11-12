const express = require('express');
const { getForces,saveForces,getSingleForces,updateForces,deleteForces } = require('../controllers/forcesController');
const router = express.Router();

router.get('/forces', getForces);
router.get('/forces/:id', getSingleForces);
router.put('/update-forces/:id', updateForces);
router.delete('/delete-forces/:id', deleteForces);
router.post('/save-forces', saveForces);

module.exports = router;