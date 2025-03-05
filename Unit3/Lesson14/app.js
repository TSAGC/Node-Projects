const express = require('express');
const mongoose = require('mongoose');
const Unit3 = require('./models/Unit3');

// Initialize Express
const app = express();
const port = 3000;

// MongoDB URL (localhost:27017 -> Node database -> Unit3 collection)
const url = 'mongodb://localhost:27017/Node';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB:', err));

// Middleware for parsing JSON
app.use(express.json());

// 3. Insert Hardcoded Data (Async function)
app.get('/insertData', async (req, res) => {
    try {
        const newUnit = new Unit3({
            name: 'Savvas',
            email: 'savvas@mail.com',
            age: 30
        });

        // Wait for the save operation to complete
        const result = await newUnit.save();
        console.log('Record inserted:', result);
        res.send('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('An error occurred while inserting data');
    }
});

// 4. Retrieve and Show Records (Async function)
app.get('/showData', async (req, res) => {
    try {
        // Wait for the find operation to complete and get all records
        const records = await Unit3.find();
        console.log('Retrieved records:', records);
        res.json(records); // Send records as a JSON response
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('An error occurred while fetching data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
