const express = require('express');
const fileController = require('./controllers/fileController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set the view engine to ejs
app.set('views', './views'); // Set the views directory to ./views

app.get('/', (req, res) => {
    res.send('Welcome to the main page!');
});

app.get('/index', fileController.renderIndex);

app.get('/hello', fileController.returnHello);

app.get('/renderEJSpageWIthParams', (req, res) => {
    res.render('params.ejs', { name: 'John Doe', email: 'johndoe@email.com' });
});


// app.get('/index', (req, res) => {
//     res.render('index.ejs'); //* render the index.ejs file at C:\Users\Dell\Desktop\Node-Projects\Lesson10\views\index.ejs
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});