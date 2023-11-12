const express = require('express');
const { getBottomNews,saveBottomNews,getSingleBottomNews,updateBottomNews,deleteBottomNews } = require('../controllers/newsBottomController');
const router = express.Router();

router.get('/bottom-news', getBottomNews);
router.get('/bottom-news/:id', getSingleBottomNews);
router.put('/update-bottom-news/:id', updateBottomNews);
router.delete('/delete-bottom-news/:id', deleteBottomNews);
router.post('/save-bottom-news', saveBottomNews);

module.exports = router;