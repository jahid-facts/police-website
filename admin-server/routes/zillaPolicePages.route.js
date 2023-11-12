const express = require('express');
const { getZillaPolicePages,saveZillaPolicePages,getSingleZillaPolicePages,updateZillaPolicePages,deleteZillaPolicePages } = require('../controllers/zillaPolicePageController');
const router = express.Router();

router.get('/zilla-police-pages', getZillaPolicePages);
router.get('/zilla-police-pages/:id', getSingleZillaPolicePages);
router.put('/update-zilla-police-pages/:id', updateZillaPolicePages);
router.delete('/delete-zilla-police-pages/:id', deleteZillaPolicePages);
router.post('/save-zilla-police-pages', saveZillaPolicePages);

module.exports = router;