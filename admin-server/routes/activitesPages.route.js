const express = require('express');
const { getActivitiesPages,saveActivitiesPages,getSingleActivitiesPages,updateActivitiesPages,deleteActivitiesPages } = require('../controllers/activitiesPageController');
const router = express.Router();

router.get('/activities-pages', getActivitiesPages);
router.get('/activities-pages/:id', getSingleActivitiesPages);
router.put('/update-activities-pages/:id', updateActivitiesPages);
router.delete('/delete-activities-pages/:id', deleteActivitiesPages);
router.post('/save-activities-pages', saveActivitiesPages);

module.exports = router;