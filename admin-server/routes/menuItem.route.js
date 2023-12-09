const express = require('express');
const { createMenu, createSubMenu1, createSubMenu2, getAllMenuTitle, getSingleMenu, editMenu, deleteMenuTitle } = require('../controllers/menuItemController'); // Adjust the path accordingly

const router = express.Router();

router.post('/create-menu-item-title', createMenu);
router.post('/create-submenu1-title', createSubMenu1);
router.post('/create-submenu2-title', createSubMenu2);
router.get('/get-all-menu-item', getAllMenuTitle);
router.get('/get-single-menu-item/:id', getSingleMenu);
router.put('/update-menu-item/:id', editMenu);
router.delete('/delete-menu-item/:id', deleteMenuTitle);

module.exports = router;