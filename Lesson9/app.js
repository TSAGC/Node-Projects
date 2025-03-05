const express = require('express');
const homeController = require('./homecontroller');

const app = express();
app.use(express.urlencoded({ extended: true }));//*9.5
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/contact", (req, res) => {//*9.1
    res.send("Contact information submitted successfully.");
});

app.get("/items/:vegetable", (req, res, next) => {//^9.2-9.4
    let paramsVar = req.params.vegetable;
    console.log(`the var is ${paramsVar}`);
    next();
});

app.post("/postData" , (req,res) => {//^9.5
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

app.get("/return-var/:var", homeController.sendReqParam)//^9.7

app.get("/secret", homeController.returnMyCrush)//^9.7

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
