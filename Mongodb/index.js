const express = require('express');
//const client = require('mongodb').MongoClient;
const app = express();

//Starting a server
app.listen(1111, () => {
    console.log('Server started');
});

//const url = "mongodb://localhost:27017/";

//Read User
app.get('/read', async(req, res) => {
    client.connect(url, async(err, db) => {
        if (err) throw err;
        db = db.db("test");
        var result = await db.collection("student").find();
        res.send(result);
    })
})

app.post('/insert', async(req, res) => {
    console.log(req.body);
    var name = req.body.name;
    var roll = req.body.roll;
    var gender = req.body.gender;
    // client.connect(url, async(err, db) => {
    //     if (err) throw err;
    //     db = db.db("test");

    //     db.collection("student").insertOne({ name, roll, gender }, (err, res) => {
    //         if (err) throw err;
    //         res.send('Student data successfully inserted');
    //     })
    // })
})