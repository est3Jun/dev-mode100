const express = require('express');
const app = express();
const path = require('path');
const sdk = require('./sdk');

const PORT = 8001;
const HOST = '0.0.0.0';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/init', function (req, res) {
<<<<<<< HEAD
   let buy = req.query.buy;
   let buyval = req.query.buyval;
   let sell = req.query.sell;
   let sellval = req.query.sellval;
   let company = req.query.company;
   let companyval = req.query.companyval;
   let args = [buy, buyval, sell, sellval, company, companyval];
   sdk.send(false, 'Init', args, res);
=======
    let sell = req.query.sell;
    let sellVal = req.query.sellVal;
    let buy = req.query.buy;
    let buyVal = req.query.buyVal;
    let company = req.query.company;
    let companyVal = req.query.companyVal;
    let args = [sell, sellVal, buy, buyVal, company, companyVal];
    sdk.send(false, 'Init', args, res);
});

app.get('/invoke', function (req, res) {
    let sell = req.query.sell;
    let buy = req.query.buy;
    let company = req.query.company;
    let itemName = req.query.itemName;
    let X = req.query.X;
    let args = [sell, buy, company, itemName, X];
    sdk.send(false, 'Invoke', args, res);
>>>>>>> 556f165adabb070b0f1ba9b6d155203ba8ec987b
});

app.get('/query', function (req, res) {
    let name = req.query.name;
    let args = [name];
    sdk.send(true, 'Query', args, res);
});

app.use(express.static(path.join(__dirname, '../client')));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
