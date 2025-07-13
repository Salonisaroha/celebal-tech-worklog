const path = require('path');

exports.uploadFile = (req, res, next) => {
  if (!req.file) {
    const error = new Error('No file uploaded');
    error.status = 400;
    return next(error);
  }

  res.status(200).json({
    message: 'File uploaded successfully',
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`
  });
};
