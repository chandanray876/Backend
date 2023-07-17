const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./databaseConnection/index');
const route = require('./routes/index');
require('dotenv').config();

app.use(cors());

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

route(app);
connect();
app.listen(process.env.PORT, () => {
  console.log('Express server listening on port 8080');
});