const express = require('express');
const router = express.Router();

exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};

exports.returnMyCrush = (req, res) => {
    res.send('My crush is a secret');
};