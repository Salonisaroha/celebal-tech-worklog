const express = require('express');
const router = express.Router();
const { getLeaves, applyLeave } = require('../controllers/leaveController');

// Routes for leave management
router.get('/', getLeaves);
router.post('/', applyLeave);

module.exports = router;
