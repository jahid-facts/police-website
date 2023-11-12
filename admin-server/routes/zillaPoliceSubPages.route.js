const express = require('express');
const { getZillaPoliceSubPages,saveZillaPoliceSubPages,getSingleZillaPoliceSubPages,updateZillaPoliceSubPages,deleteZillaPoliceSubPages } = require('../controllers/zillaPoliceSubPageController');
const router = express.Router();

router.get('/zilla-police-sub-pages', getZillaPoliceSubPages);
router.get('/zilla-police-sub-pages/:id', getSingleZillaPoliceSubPages);
router.put('/update-zilla-police-sub-pages/:id', updateZillaPoliceSubPages);
router.delete('/delete-zilla-police-sub-pages/:id', deleteZillaPoliceSubPages);
router.post('/save-zilla-police-sub-pages', saveZillaPoliceSubPages);

module.exports = router;