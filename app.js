var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');

var app = express();

mongoose.connect('mongodb://localhost/romanoff-io', function (err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('mongodb connection successful');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

var corsOptions = {
  //origin: 'http://localhost:4000',
  origin: true,
  methods: ['GET', 'PUT', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// enable CORS - Cross Origin Resource Sharing
app.use(cors(corsOptions));

// mount all routes on /api path
app.use('/api', routes);


module.exports = app;
