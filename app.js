const express = require('express');
const app = express();

app.use(express.static("public/static"))

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
    // res.send('Hello world');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/about.html")
    // res.send('Hello world');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + "/public/projects.html")
    // res.send('Hello world');
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));