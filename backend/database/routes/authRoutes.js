//Require Statements
const express = require('express');
const{registerController,loginController} = require('../controllers/authControllers')  

//Router Object
const router  = express.Router();

//User Register Route Method:Post
router.post('/register',registerController)

// User LogIn  Route Method:Post
router.post('/login',loginController)

//Export Statements
module.exports = router