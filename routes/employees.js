const express = require("express");
const{employees, addEmployee, editEmployee, deleteEmployee} = require("../controllers/employees_controller");
const { isAdmin } = require("../config/isAdmin");
const router = express.Router();
// const passport = require('passport');

router.get('/',isAdmin, employees);
router.post('/create', addEmployee);
router.post('/edit', editEmployee);
router.get('/delete/:id', deleteEmployee);
// router.post('/deletestudent', deleteStudent ) ;
 

module.exports = router;