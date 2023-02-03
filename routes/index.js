const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.home); // direct /project routes to home controller
router.use('/project', require('./project')); // direct /project routes
router.use('/bug', require('./bug')); // direct /bug routes

module.exports = router;
