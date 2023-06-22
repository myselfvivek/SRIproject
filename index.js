const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

require('dotenv').config;
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

const connectdB = require('./config/database');
connectdB();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
    // res.render('home');
})

app.get('/', (req, res) => {
    res.render('home');
})