const express = require('express');
const { getWork,saveWork,getSingleWork,updateWork,deleteWork } = require('../controllers/workController');
const router = express.Router();

router.get('/work', getWork);
router.get('/work/:id', getSingleWork);
router.put('/update-work/:id', updateWork);
router.delete('/delete-work/:id', deleteWork);
router.post('/save-work', saveWork);

module.exports = router;