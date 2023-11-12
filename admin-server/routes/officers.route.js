const express = require('express');
const { getOfficers,saveOfficers,getSingleOfficers,updateOfficers,deleteOfficers } = require('../controllers/officersController');
const router = express.Router();

router.get('/officers', getOfficers);
router.get('/officers/:id', getSingleOfficers);
router.put('/update-officers/:id', updateOfficers);
router.delete('/delete-officers/:id', deleteOfficers);
router.post('/save-officers', saveOfficers);

module.exports = router;