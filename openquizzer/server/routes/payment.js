const router = require('express').Router();
const paymentControl = require('../controllers/paymentController');

router.post('/checkout', paymentControl.createCheckout);

module.exports = router;