const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bug_controller');

router.post('/create/projectId/:id', bugController.create);

module.exports = router;
