const express = require('express');
const { getRoles,saveRoles,getSingleRoles,updateRoles,deleteRoles } = require('../controllers/rolesController');
const router = express.Router();

router.get('/roles', getRoles);
router.get('/roles/:id', getSingleRoles);
router.put('/update-roles/:id', updateRoles);
router.delete('/delete-roles/:id', deleteRoles);
router.post('/save-roles', saveRoles);

module.exports = router;