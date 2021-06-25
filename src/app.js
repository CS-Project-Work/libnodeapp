var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var routes1 = require('./routes/registration_route');
var routes2 = require('./routes/login-route');
var routes3 = require('./routes/logout-route');
var routes4 = require('./routes/user_dashboard-route');
var routes5 = require('./routes/lib-login-route');
var routes6 = require('./routes/librarian-route');
var routes7 = require('./routes/faculty_dashboard-route');
var routes8 = require('./routes/feedback-route');
var routes9 = require('./routes/lib-feedback-route');
var routes10 = require('./routes/std-req-route');
var routes11 = require('./routes/lib-req-route');
var routes12 = require('./routes/std-support-route');
var routes13 = require('./routes/lib-support-route');
var routes16 = require('./routes/faculty_dashboard-route');
var routes17 = require('./routes/std-book-search');
var routes18 = require('./routes/lib-stock-manager');
var routes19 = require('./routes/lib-book-issued-route');
var routes20 = require('./routes/profile');
var routes21 = require('./routes/lib-details');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');;

var facRouter = require('./routes/fac');;

var app = express();
// view engine setup

app.use('/', indexRouter);

app.use('/fac', facRouter);

app.use('/users', usersRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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



var logger = require('morgan');
var session = require('express-session');
var facRouter = require('./routes/fac');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
app.use(session({
        secret: '123456cat',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }))
    // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/fac', facRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', routes1);
app.use('/', routes2);
app.use('/', routes3);
app.use('/', routes4);
app.use('/', routes5);
app.use('/', routes6);
app.use('/', routes7);
app.use('/', routes8);
app.use('/', routes9);
app.use('/', routes10);
app.use('/', routes11);
app.use('/', routes12);
app.use('/', routes13);
app.use('/',routes17);
app.use('/',routes18);
app.use('/',routes19);
app.use('/',routes20);
app.use('/',routes21);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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
