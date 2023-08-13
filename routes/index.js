const express = require("express");
const {home} = require("../controllers/home_controller");
const user = require("./users");
const passport = require("passport"); 
// this is router 
const router = express.Router(); 
const employees = require('./employees');
const performance = require('./performance');

// this is handling home page route 
router.get('/', home ) ;
// this is handling all users route 
router.use('/user', user);
// this is handling all employees route 
router.use('/employees', passport.checkAuthentication, employees );
// this is handling all performance route 
router.use('/performance', passport.checkAuthentication, performance );
module.exports = router;
// console.log(passport); 
