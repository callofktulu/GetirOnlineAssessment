require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const api = require('./api');
const app = express();
const mongoose = require('mongoose');
const dbConnectionUri = process.env.DATABASE_URL

module.exports = app;
mongoose.connect(dbConnectionUri);
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connection is successful!');
})

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '👋 Hello! Thanks for using Getir Test API. Please use api/v1/ end point using POST.'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
