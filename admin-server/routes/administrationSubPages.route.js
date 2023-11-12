const express = require('express');
const { getAdministrationSubPages,saveAdministrationSubPages,getSingleAdministrationSubPages,updateAdministrationSubPages,deleteAdministrationSubPages } = require('../controllers/administrationSubPageController');
const router = express.Router();

router.get('/administration-sub-pages', getAdministrationSubPages);
router.get('/administration-sub-pages/:id', getSingleAdministrationSubPages);
router.put('/update-administration-sub-pages/:id', updateAdministrationSubPages);
router.delete('/delete-administration-sub-pages/:id', deleteAdministrationSubPages);
router.post('/save-administration-sub-pages', saveAdministrationSubPages);

module.exports = router;