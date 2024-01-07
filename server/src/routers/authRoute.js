const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.route('/signup').post(register).get((req,res)=>{res.send("I am working here too")});
router.route('/signin').post(login);

module.exports = router;