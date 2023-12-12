const express = require('express');
const { createMenu, getAllMenuTitle, getSingleMenu, editMenu, deleteMenuTitle } = require('../controllers/menuItemController'); // Adjust the path accordingly

const router = express.Router();

router.post('/create-sub-menu-item-title', createMenu);
router.get('/get-all-sub-menu-item', getAllMenuTitle);
router.get('/get-single-sub-menu-item/:id', getSingleMenu);
router.put('/update-sub-menu-item/:id', editMenu);
router.delete('/delete-sub-menu-item/:id', deleteMenuTitle);

module.exports = router;