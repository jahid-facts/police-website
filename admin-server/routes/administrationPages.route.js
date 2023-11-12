const express = require('express');
const {getAdministrationPagesOnly, getAdministrationPages,saveAdministrationPages,getSingleAdministrationPages,updateAdministrationPages,deleteAdministrationPages } = require('../controllers/administrationPageController');
const router = express.Router();

router.get('/administration-pages', getAdministrationPages);
router.get('/administration-pages-only', getAdministrationPagesOnly);
router.get('/administration-pages/:id', getSingleAdministrationPages);
router.put('/update-administration-pages/:id', updateAdministrationPages);
router.delete('/delete-administration-pages/:id', deleteAdministrationPages);
router.post('/save-administration-pages', saveAdministrationPages);

module.exports = router;