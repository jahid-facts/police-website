const express = require('express');
const { getNoticeCategories,saveNoticeCategories,getSingleNoticeCategories,updateNoticeCategories,deleteNoticeCategories } = require('../controllers/noticeCategoriesController');
const {getNoticeSetup, getNotice,saveNotice,getSingleNotice,updateNotice,deleteNotice,getNoticeByCategoryId, getSingleNoticeSetUp } = require('../controllers/noticesController');
const router = express.Router();
// notice category
router.get('/notice-categories', getNoticeCategories);
router.get('/notice-categories/:id', getSingleNoticeCategories);
router.put('/update-notice-categories/:id', updateNoticeCategories);
router.delete('/delete-notice-categories/:id', deleteNoticeCategories);
router.post('/save-notice-categories', saveNoticeCategories);
// notice
router.get('/notice', getNotice);
router.get('/notice-setup', getNoticeSetup);
router.get('/notice/:id', getSingleNotice); 
router.get('/notice-setup/:id', getSingleNoticeSetUp); 
router.put('/update-notice/:id', updateNotice);
router.delete('/delete-notice/:id', deleteNotice);
router.post('/save-notice', saveNotice);
router.get('/notice-by-category/:id', getNoticeByCategoryId);

module.exports = router;