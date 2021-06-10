import Razorpay from 'razorpay';

// @desc    Create order
// @route   POST /api/razorpay
// @access  Public
const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const { totalAmount, currency, orderId } = req.body;
    const options = {
      amount: totalAmount, // amount in smallest currency unit
      currency: currency,
      receipt: `receipt_order_${orderId}`,
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send('Some error occured');

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createOrder };
