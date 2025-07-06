const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const newOrder = new Order({
      user: req.user.userId,
      items,
      totalAmount
    });

    await newOrder.save();
    res.status(201).json({ msg: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.userId });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
