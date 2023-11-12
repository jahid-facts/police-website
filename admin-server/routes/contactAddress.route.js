const express = require('express');
const { getContactAddress,saveContactAddress,getSingleContactAddress,updateContactAddress,deleteContactAddress } = require('../controllers/contactAddressController');
const router = express.Router();

router.get('/contact-address', getContactAddress);
router.get('/contact-address/:id', getSingleContactAddress);
router.put('/update-contact-address/:id', updateContactAddress);
router.delete('/delete-contact-address/:id', deleteContactAddress);
router.post('/save-contact-address', saveContactAddress);

module.exports = router;