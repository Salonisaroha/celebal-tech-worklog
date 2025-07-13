const axios = require('axios');

exports.fetchExternalData = async (req, res, next) => {
  try {
    // Example: Fetching a random user
    const response = await axios.get('https://randomuser.me/api/');
    res.status(200).json({
      message: 'Fetched external API data successfully',
      data: response.data
    });
  } catch (error) {
    next(error);
  }
};
