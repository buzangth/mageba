const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/User');
require('./models/Order');
require('./models/Item');
//const Sequelize = require('sequelize');

mongoose.connect(keys.mongoURL);
const app = express();

const PORT = 5000;
app.listen(PORT);