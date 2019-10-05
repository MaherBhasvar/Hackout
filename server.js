const express = require('express')
const bodyParser = require('body-parser');

const app = express();


//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"))

const port = 5000;

app.listen(port, () => console.log(`Server Running on Port ${port}`));
module.exports.app = app;