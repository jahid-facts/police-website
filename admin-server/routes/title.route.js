const express = require('express');
const { getTitle, saveTitle, getSingleTitle, updateTitle, deleteTitle } = require('../controllers/titleController');
const router = express.Router();

router.get('/title', getTitle);
router.get('/title/:id', getSingleTitle);
router.put('/update-title/:id', updateTitle);
router.delete('/delete-title/:id', deleteTitle);
router.post('/create-title', saveTitle);

module.exports = router;