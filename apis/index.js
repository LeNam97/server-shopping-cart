require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
// eslint-disable-next-line no-unused-vars
const db = require('./configs/mongoose')
const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(logger('dev'))
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/index')

// const bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(routes)

module.exports = {
  path: '/api',
  handler: app
}

