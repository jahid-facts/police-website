const express = require('express');
const { getSlide,saveSlide,getSingleSlide,updateSlide,deleteSlide } = require('../controllers/rightSidebarOthersController');
const router = express.Router();

router.get('/right-side-others', getSlide);
router.get('/right-side-others/:id', getSingleSlide);
router.put('/update-right-side-others/:id', updateSlide);
router.delete('/delete-right-side-others/:id', deleteSlide);
router.post('/save-right-side-others', saveSlide);

module.exports = router;