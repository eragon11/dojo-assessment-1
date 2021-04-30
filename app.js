const express = require('express');
const connectionManager = require('./connection')
const indexRouter = require('./routes/index');
const bidRouter = require('./routes/bid');

const app = express();
connectionManager.getConnection();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/bid', bidRouter);
app.use('/', indexRouter);

module.exports = app;
