// @desc    Get Paypal Credentials
// @route   GET /api/config/paypal
// @access  Public
const getPaypalCredentials = (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID);

// @desc    Get Razorpay Credentials
// @route   GET /api/config/razorpay
// @access  Public
const getRazorpayCredentials = (req, res) => {
  res.send(process.env.RAZORPAY_KEY_ID);
};

export { getPaypalCredentials, getRazorpayCredentials };
