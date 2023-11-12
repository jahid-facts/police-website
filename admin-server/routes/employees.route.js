const express = require('express');
const { getEmployees,saveEmployees,getSingleEmployees,updateEmployees,deleteEmployees } = require('../controllers/employeesController');
const router = express.Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getSingleEmployees);
router.put('/update-employees/:id', updateEmployees);
router.delete('/delete-employees/:id', deleteEmployees);
router.post('/save-employees', saveEmployees);

module.exports = router;