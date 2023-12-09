const express = require('express');
const { createTitle, getAllTitles, getSingleTitle, editTitle, deleteTitle } = require('../controllers/rightSideController'); // Adjust the path accordingly

const router = express.Router();

router.post('/titles', createTitle);
router.get('/titles', getAllTitles);
router.get('/titles/:id', getSingleTitle);
router.put('/titles/:id', editTitle);
router.delete('/titles/:id', deleteTitle);

module.exports = router;