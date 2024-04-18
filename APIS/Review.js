const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

//app.use(bodyParser.json());
app.use(express.json());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mwQg67XN',
    database: 'newdb'
});

con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log("Connected to MySQL!!");
});

app.post('/v1/review', (req, res) => {

    const { serviceProviderId, rating, comment } = req.body;

    // const serviceProviderId = req.body.serviceProviderId;
    // const rating = req.body.rating;
    // const comment = req.body.comment;

    const query = 'INSERT INTO review (ServiceProviderId, rating, comment) VALUES (?, ?, ?)';
    const values = [serviceProviderId, rating, comment];

    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send("Review successfully added");
    });
});

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`http://localhost:${port}`);
});
