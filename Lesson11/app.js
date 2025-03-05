const express = require('express');
const errorController = require('./controllers/errorController');   // Import the errorController.js file

const app = express();
const port = 3000;

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});