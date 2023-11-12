const express = require('express');
const { getContactPerson,saveContactPerson,getSingleContactPerson,updateContactPerson,deleteContactPerson } = require('../controllers/contactPersonController');
const router = express.Router();

router.get('/contact-person', getContactPerson);
router.get('/contact-person/:id', getSingleContactPerson);
router.put('/update-contact-person/:id', updateContactPerson);
router.delete('/delete-contact-person/:id', deleteContactPerson);
router.post('/save-contact-person', saveContactPerson);

module.exports = router;