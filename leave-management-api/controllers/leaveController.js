const Leave = require('../models/leaveModel');

// GET all leave requests
const getLeaves = (req, res) => {
  const leaves = Leave.getAllLeaves();
  res.status(200).json({
    success: true,
    count: leaves.length,
    data: leaves,
  });
};

// POST a new leave request
const applyLeave = (req, res) => {
  const { employeeName, reason, from, to } = req.body;

  if (!employeeName || !reason || !from || !to) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: employeeName, reason, from, to',
    });
  }

  const leave = Leave.applyLeave({ employeeName, reason, from, to });
  res.status(201).json({
    success: true,
    message: 'Leave request submitted successfully',
    data: leave,
  });
};

module.exports = { getLeaves, applyLeave };
