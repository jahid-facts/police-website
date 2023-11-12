const express = require('express');
const { getVisitorCounter,saveVisitorCounter,getSingleVisitorCounter,updateVisitorCounter,deleteVisitorCounter } = require('../controllers/visitorCounterController');
const router = express.Router();

router.get('/visitor-counter', getVisitorCounter);
router.get('/visitor-counter/:id', getSingleVisitorCounter);
router.put('/update-visitor-counter/:id', updateVisitorCounter);
router.delete('/delete-visitor-counter/:id', deleteVisitorCounter);
router.post('/save-visitor-counter', saveVisitorCounter);

module.exports = router;