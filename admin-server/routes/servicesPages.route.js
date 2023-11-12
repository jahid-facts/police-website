const express = require('express');
const { getServicesPages,saveServicesPages,getSingleServicesPages,updateServicesPages,deleteServicesPages } = require('../controllers/servicesPageController');
const router = express.Router();

router.get('/services-pages', getServicesPages);
router.get('/services-pages/:id', getSingleServicesPages);
router.put('/update-services-pages/:id', updateServicesPages);
router.delete('/delete-services-pages/:id', deleteServicesPages);
router.post('/save-services-pages', saveServicesPages);

module.exports = router;