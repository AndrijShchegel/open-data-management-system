const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;
const host = '0.0.0.0';

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/editForm', require('./controls'));

app.listen(port, host, () => {
  console.log(`Server started: ${host}:${port}`);
});
