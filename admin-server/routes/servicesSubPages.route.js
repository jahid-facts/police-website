const express = require('express');
const { getServicesSubPages,saveServicesSubPages,getSingleServicesSubPages,updateServicesSubPages,deleteServicesSubPages } = require('../controllers/servicesSubPageController');
const router = express.Router();

router.get('/services-sub-pages', getServicesSubPages);
router.get('/services-sub-pages/:id', getSingleServicesSubPages);
router.put('/update-services-sub-pages/:id', updateServicesSubPages);
router.delete('/delete-services-sub-pages/:id', deleteServicesSubPages);
router.post('/save-services-sub-pages', saveServicesSubPages);

module.exports = router;