const express = require("express")
const mysql = require("mysql")
const app = express()

app.use(express.json()); //app.use(express.json());


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mwQg67XN',
    database: 'newdb'
});

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to mysql!!")
    }
});

app.post('/post', (req, res) => {
    const ServiceProviderId = req.body.ServiceProviderId;
    const rating = req.body.rating;
    const comment = req.body.comment;

    const query = 'INSERT INTO Bankdetails (id, name, accountnumber,IFSCCode) VALUES (?, ?, ?, ?)';
    const values = [id, name, accountnumber, IFSCCode];

    con.query(query, values, (err, result) => {

        if (err) {
            console.log(err)
            res.status(500).send("Internal Server Error");
        } else {
            res.send("Bankdetails successfully added")
        }
    });



});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(` Server is running on http://localhost:${port}`);
    }
});











