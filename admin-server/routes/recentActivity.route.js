const express = require('express');
const { getActivity,saveActivity,getSingleActivity,updateActivity,deleteActivity } = require('../controllers/recentActivityController');
const router = express.Router();

router.get('/recent-activity', getActivity);
router.get('/recent-activity/:id', getSingleActivity);
router.put('/update-recent-activity/:id', updateActivity);
router.delete('/delete-recent-activity/:id', deleteActivity);
router.post('/save-recent-activity', saveActivity);

module.exports = router;