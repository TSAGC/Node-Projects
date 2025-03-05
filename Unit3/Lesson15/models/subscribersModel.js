const mongoose = require('mongoose');

// Define the schema
const subscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    subscribedDate: { type: Date, default: Date.now },
});

// Create the model
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;