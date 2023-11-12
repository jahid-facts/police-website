const express = require('express');
const {getTest, getNews,saveNews,getSingleNews,updateNews,deleteNews } = require('../controllers/newsController');
const router = express.Router();

router.get('/', getTest);
router.get('/news', getNews);
router.get('/news/:id', getSingleNews);
router.put('/update-news/:id', updateNews);
router.delete('/delete-news/:id', deleteNews);
router.post('/save-news', saveNews);

module.exports = router;