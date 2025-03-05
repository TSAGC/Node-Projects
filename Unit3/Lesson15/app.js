const express = require('express');
const mongoose = require('mongoose');
const subscriberController = require('./controllers/subscriberController');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection URL
const url = 'mongodb://localhost:27017/Node';

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB:', err));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Available Routes</h1>
        <ul>
            <li><strong>GET /</strong> - Home route (this page)</li>
            <li><strong>GET /insertSubscriber</strong> - Insert a hardcoded subscriber</li>
            <li><strong>GET /subscribers</strong> - Display all subscribers in EJS</li>
        </ul>
    `);
});

app.get('/insert', (req,res) => {
    res.render('insert');
});

app.get('/insertSubscriber', subscriberController.insertSubscriber); // Insert hardcoded subscriber
app.get('/subscribers', subscriberController.getAllSubscribers);    // Display all subscribers in EJS


app.post('/storeFormData', subscriberController.storeFormData);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});