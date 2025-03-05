// models/unit3.js
const mongoose = require('mongoose');

// Define the schema for the data
const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true }
});

// Create the model based on the schema
const Unit3 = mongoose.model('Unit3', unitSchema);

module.exports = Unit3;
