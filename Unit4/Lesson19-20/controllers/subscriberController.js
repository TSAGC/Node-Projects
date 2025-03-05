const Subscriber = require('../models/Subscriber');

//^ list all subscribers on the index page
exports.listSubscribers = async (req, res) => {
    try {
      const subscribers = await Subscriber.find();
      res.render('index', { subscribers });
    } catch (err) {
      res.status(500).send(err.message);
    }
};

//^reneders the form to create a new subscriber

exports.renderCreateForm = (req, res) => {
    res.render('create');
};

//^creates a new subscriber

exports.createSubscriber = async (req, res) => {
    try {
      const { name, email } = req.body;
      const newSubscriber = new Subscriber({ name, email });
      await newSubscriber.save();
      res.redirect('/');
    } catch (err) {
      res.status(500).send(err.message);
    }
};

//^renders the form to update a subscriber
exports.renderEditForm = async (req, res) => {
    try {
      const subscriber = await Subscriber.findById(req.params.id);
      res.render('edit', { subscriber });
    } catch (err) {
      res.status(500).send(err.message);
    }
};

// Update a subscriber
exports.updateSubscriber = async (req, res) => {
    try {
      const { name, email } = req.body;
      await Subscriber.findByIdAndUpdate(req.params.id, { name, email });
      res.redirect('/');
    } catch (err) {
      res.status(500).send(err.message);
    }
};

// Delete a subscriber
exports.deleteSubscriber = async (req, res) => {
    try {
      await Subscriber.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (err) {
      res.status(500).send(err.message);
    }
};