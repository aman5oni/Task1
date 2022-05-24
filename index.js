const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
const app = express();
const port = 3000;

const routes = require('./routes/route.js')(app, fs);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

