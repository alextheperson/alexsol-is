const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static("public/static"))

const PORT = process.env.PORT || 8000;

var con = mysql.createConnection({
    host: "localhost:5522",
    user: "alexizys_pojects",
    password: "aF6jfsUrZinun@4"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
    res.send('Hello world');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
    // res.send('Hello world');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + "/public/projects.html")
    // res.send('Hello world');
});

app.get('/projects/*', (req, res) => {
    res.sendFile(__dirname + "/public/projects.html")
    // res.send('Hello world');
});

app.get("/test", (req, res) => {
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(`<p>Result: ${result}</p>`)
    });
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));