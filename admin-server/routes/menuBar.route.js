const express = require('express');
const { createMenuTitle, getAllMenuTitles, getSingleMenuTitle, editMenuTitle, deleteMenuTitle, createSubTitle, getSubtitlesByTitle, getAllSubTitle, getSingleSubTitle, editSubTitle, deleteSubTitle } = require('../controllers/menuBarController'); // Adjust the path accordingly

const router = express.Router();

router.post('/create-menu-title', createMenuTitle);
router.get('/get-all-menu-title', getAllMenuTitles);
router.get('/get-single-menu-title/:id', getSingleMenuTitle);
router.put('/update-menu-title/:id', editMenuTitle);
router.delete('/delete-menu-title/:id', deleteMenuTitle);


router.post('/create-sub-menu-item-title/:titleId', createSubTitle);

router.get('/get-subtitles-by-title/:titleId', getSubtitlesByTitle);

// router.get('/get-all-sub-menu-item/:titleId', getAllSubTitle);
router.get('/get-all-sub-menu-item', getAllSubTitle);

router.get('/get-single-sub-menu-item/:titleId/:id', getSingleSubTitle);
router.put('/update-sub-menu-item/:titleId/:id', editSubTitle);
router.delete('/delete-sub-menu-item/:titleId/:id', deleteSubTitle);

module.exports = router;