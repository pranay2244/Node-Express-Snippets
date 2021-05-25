const express = require('express');
const path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'static')));

app.listen(1111, () => console.log('Server listening'));

app.get('/', (req, res) => {
    res.send('Hello Pranay!!');
})

app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/operations', (req, res) => {
    console.log(req.query);
    var num1 = req.query['num1'];
    var num2 = req.query['num2'];
    var sum = parseInt(num1) + parseInt(num2);
    var diff = num1 - num2;
    var prod = num1 * num2;
    try {
        var quot = parseFloat((num1 / num2).toFixed(3));
        var rem = num1 % num2;
    } catch (e) {
        var quot = undefined;
        var rem = undefined;
    }
    var ans = {
        "sum": sum,
        "diff": diff,
        "prod": prod,
        "quot": quot,
        "rem": rem
    }
    res.send(ans);
})