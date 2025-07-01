const router = require('express').Router();
const subscriptionController = require('../controllers/subscriptionController');
const express = require('express');


router.post(
  '/stripe',
  //stripe returns raw bytes
  express.raw({ type: 'application/json' }),
  subscriptionController.handleSubscription);


module.exports = router;