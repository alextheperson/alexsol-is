const fs = require('fs');
const express = require('express');
const pug = require('pug');

const app = express();

const home = pug.compileFile('public/home.pug');
const about = pug.compileFile('public/about.pug');
const projectList = pug.compileFile('public/project-list.pug');
const projectPage = pug.compileFile('public/project.pug');

app.use(express.static("public/static"));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/public/home.html")
    res.send(home({ page: "home" }));
});

app.get('/about', (req, res) => {
    res.send(about({ page: "about" }));
});

app.get('/projects', (req, res) => {
    fs.readFile("public/projects.json", (err, data) => {
        if (err) throw err
        res.send(projectList({ page: "projects", projects: JSON.parse(data) }));
    })
});

app.get('/projects/*', (req, res) => {
    fs.readFile("public/projects.json", (err, data) => {
        if (err) throw err
        res.send(projectPage({ project: JSON.parse(data)[req.url.slice(10)] }));
    })
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));