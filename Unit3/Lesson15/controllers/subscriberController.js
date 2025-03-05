const Subscriber = require('../models/subscribersModel');

// Insert a hardcoded subscriber
exports.insertSubscriber = async (req, res) => {
    try {
        const newSubscriber = new Subscriber({
            name: 'testUser1',
            email: 'testUser2@mail.com',
        });

        const result = await newSubscriber.save();
        console.log('Subscriber inserted:', result);
        res.send('Subscriber inserted successfully!');
    } catch (err) {
        console.error('Error inserting subscriber:', err);
        res.status(500).send('An error occurred while inserting the subscriber.');
    }
};

// Fetch all subscribers and render the EJS file
exports.getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        console.log('Fetched subscribers:', subscribers);

        // Render the EJS file and pass subscribers as data
        res.render('index', { subscribers });
    } catch (err) {
        console.error('Error fetching subscribers:', err);
        res.status(500).send('An error occurred while fetching subscribers.');
    }
};

exports.storeFormData = async (req, res) => {
    try {    
        const newSubscriber = new Subscriber({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        });

        const result = await newSubscriber.save();

        res.send('Subscriber inserted successfully!' + result);
    //     const result = await newSubscriber.save();
    //     console.log('Subscriber inserted:', result);
    //     res.send('Subscriber inserted successfully!');
    } catch (err) {
            res.send('Error inserting subscriber:', err);
    //     console.error('Error inserting subscriber:', err);
    //     res.status(500).send('An error occurred while inserting the subscriber.');
    }
}