const express = require('express');
const { getUserProfile, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.route('/profile').get(getUserProfile);
router.route('/').get(getAllUsers);

module.exports = router;