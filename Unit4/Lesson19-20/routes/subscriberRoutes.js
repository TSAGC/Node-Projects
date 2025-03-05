const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

// Home page (list all subscribers)
router.get('/', subscriberController.listSubscribers);

// Create a new subscriber
router.get('/create', subscriberController.renderCreateForm);
router.post('/create', subscriberController.createSubscriber);

// Edit a subscriber
router.get('/edit/:id', subscriberController.renderEditForm);
router.post('/edit/:id', subscriberController.updateSubscriber);

// Delete a subscriber
router.get('/delete/:id', subscriberController.deleteSubscriber);

module.exports = router;