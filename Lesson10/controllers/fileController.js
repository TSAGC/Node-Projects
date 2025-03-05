exports.renderIndex = (req, res) => {
    res.render('index.ejs');
}

exports.returnHello = (req, res) => {
    res.send('Hello World!');
}  // This function will return 'Hello World!' when the /hello route is visited