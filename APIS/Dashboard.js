const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
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
app.post('/v1/AdminDashboard', (req, res) => {
    // Listed Services
    const { serviceName, description, status } = req.body;
    const query = 'INSERT INTO dashboard (serviceName,description,status) VALUES (?, ?, ?)';
    const values = [serviceName, description, status];
    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send("Listed Service successfully added");
    });

});
app.post('/v1/AdminDashboard', (req, res) => {

    // Orders:
    const { orderId, service, customer, date, orderStatus } = req.body;
    const query = 'INSERT INTO orders(orderId,service,customer,date,orderStatus) VALUES(?,?,?,?,?)';
    const values = [orderId, service, customer, date, orderStatus];
    con.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send("orders updated successfully");
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
