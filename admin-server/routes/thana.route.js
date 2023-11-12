const express = require('express');
const { getThana,saveThana,getSingleThana,updateThana,deleteThana } = require('../controllers/thanaController');
const router = express.Router();

router.get('/thana', getThana);
router.get('/thana/:id', getSingleThana);
router.put('/update-thana/:id', updateThana);
router.delete('/delete-thana/:id', deleteThana);
router.post('/save-thana', saveThana);

module.exports = router;