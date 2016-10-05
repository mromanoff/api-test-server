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
//app.use(cookieParser());

// app.set('trust proxy', 1); // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { path: '/', httpOnly: false, secure: false, maxAge: null }
// }));


var corsOptions = {
  origin: 'http://localhost:4000',
  methods: ['GET', 'PUT', 'POST'],
  credentials: true,
  //preflightContinue: true,
 // allowedHeaders: 'Content-Type, credentials',
  maxAge: 600,
  //exposedHeaders: 'Access-Control-Allow-Origin',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// enable CORS - Cross Origin Resource Sharing
app.use(cors(corsOptions));


var sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  //name: 'romanoff.io',
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false,
    path:'/',
    //maxAge: null
    //,
    //domain: 'localhost:4000'
  }
};

// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1); // trust first proxy
//   sess.cookie.secure = true; // serve secure cookies
// }

app.use(session(sessionOptions));


// mount all routes on /api path
app.use('/api', routes);


module.exports = app;
