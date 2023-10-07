require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var expressSession = require('express-session');
var passport = require('passport');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

var app = express();

require('./app_api/models/db');

const MongoStore = require('connect-mongo');
const Connection = require('./app_api/models/db');
//const SessionStore = new MongoStore({mongooseConnection: Connection, collection: 'session'})

require('./app_api/config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
// Register the partials folder
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

// https://stackoverflow.com/questions/64455899/passport-js-not-able-to-get-session-from-client-for-some-browsers-works-perfec
//app.enable('trust proxy')
//app.use(expressSession({
//  cookie: {
//    sameSite: 'none',
//    secure: true
//  }
//}));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({ 
  resave: false,
  saveUninitialized: false,
  secret: "`1NewHampsh!reCollege0fAccounting@Commerce",
  //store: MongoStore.create( this.options ),
  //store: SessionStore.create( options ),
  cookie: {
    sameSite: 'none',
    secure: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// allow CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) =>{
  if (err.name === 'UnauthorizedError') {
    res
      .status(401)
      .json({"message": err.name + ": " + err.message});
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
