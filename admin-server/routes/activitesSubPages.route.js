const express = require('express');
const { getActivitiesSubPages,saveActivitiesSubPages,getSingleActivitiesSubPages,updateActivitiesSubPages,deleteActivitiesSubPages } = require('../controllers/activitiesSubPageController');
const router = express.Router();

router.get('/activities-sub-pages', getActivitiesSubPages);
router.get('/activities-sub-pages/:id', getSingleActivitiesSubPages);
router.put('/update-activities-sub-pages/:id', updateActivitiesSubPages);
router.delete('/delete-activities-sub-pages/:id', deleteActivitiesSubPages);
router.post('/save-activities-sub-pages', saveActivitiesSubPages);

module.exports = router;