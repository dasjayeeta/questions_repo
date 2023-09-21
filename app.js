const express = require('express');
require('./db/connect');

const question_Route = require('./routes/questionRoute');
const app = express();
const port = 4500;

app.use(question_Route);

app.get("/", (req, res) => {
    res.send("Welcome...");
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})