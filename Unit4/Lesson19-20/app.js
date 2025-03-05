const express = require('express');
const mongoose = require('mongoose');
const subscriberRoutes = require('./routes/subscriberRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Node', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', subscriberRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});