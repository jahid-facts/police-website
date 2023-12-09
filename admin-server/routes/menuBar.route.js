const express = require('express');
const { createMenuTitle, getAllMenuTitles, getSingleMenuTitle, editMenuTitle, deleteMenuTitle } = require('../controllers/menuBarController'); // Adjust the path accordingly

const router = express.Router();

router.post('/create-menu-title', createMenuTitle);
router.get('/get-all-menu-title', getAllMenuTitles);
router.get('/get-single-menu-title/:id', getSingleMenuTitle);
router.put('/update-menu-title/:id', editMenuTitle);
router.delete('/delete-menu-title/:id', deleteMenuTitle);

module.exports = router;