import express from 'express';

const router = express.Router();
import { createOrder } from '../controllers/paymentController.js';

router.post('/razorpay', createOrder);

export default router;
