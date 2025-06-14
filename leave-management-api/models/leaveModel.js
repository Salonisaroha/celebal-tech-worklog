//Mock database for testing or showing purpose.
let leaveRequests = [
  {
    id: 1,
    employeeName: 'Rohan Sharma',
    reason: 'Medical leave',
    from: '2025-06-15',
    to: '2025-06-17',
    status: 'Pending',
  }
];

const getAllLeaves = () => leaveRequests;

const applyLeave = (leaveData) => {
  const newLeave = {
    id: leaveRequests.length + 1,
    ...leaveData,
    status: 'Pending',
  };
  leaveRequests.push(newLeave);
  return newLeave;
};

module.exports = { getAllLeaves, applyLeave };
