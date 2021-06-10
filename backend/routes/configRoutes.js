import express from 'express';
const router = express.Router();
import {
  getPaypalCredentials,
  getRazorpayCredentials,
} from '../controllers/configController.js';

router.get('/paypal', getPaypalCredentials);
router.get('/razorpay', getRazorpayCredentials);

export default router;
