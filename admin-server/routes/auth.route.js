const express = require('express');
const {resetPassword,resetPasswordRequest,changePassword,getSingleUser, login, register, getUser, getTotalUser, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUser);

router.get('/total-user', getTotalUser);

router.get('/users/:id', getSingleUser);
// router.put('/update-users/:id', updateUser);
router.delete('/delete-users/:id', deleteUser);
router.post('/register', register);
router.put('/update-user/:id', updateUser);
router.post('/login', login);
router.put('/change-password', changePassword);
router.post('/forget-password', resetPasswordRequest);
router.post('/reset-password', resetPassword);

module.exports = router;