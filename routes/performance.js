const express = require("express");
const{assignTask, createTask, feedback, submitFeedback} = require("../controllers/performance_controller");
const router = express.Router();
const passport = require('passport');
const { isAdmin } = require("../config/isAdmin");

router.get('/assign-task', isAdmin, assignTask);
router.get('/feedback', feedback);
router.post('/create-task', createTask);
router.post('/submit-feedback/:id', submitFeedback);


module.exports = router;