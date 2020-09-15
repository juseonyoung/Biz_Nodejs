var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// nodejs와 몽고디비를 연동하기 위해 mongoose 모듈을 import함
var mongoose = require("mongoose");
// db연결 객체 생성
var dbConn = mongoose.connection;
// $("#id").on(click,function()) 클릭하면 기능..
// id태그 클릭하면 수행할 event핸들링 아래 코드가 대신
// 몽구스 통하여 db에 연결을 시도했을 때 정상적으로 오픈되면 open
dbConn.once("open",function(){
  console.log("MongoDB open 완료")
});

// db와 연결하여 crud수행과정에서 오류나면 오류메시지를 표시하라
dbConn.on("error",function(error){
  console.err(error);
});

// 로컬호스트 통해 mongoDB 서버 접속
mongoose.connect("mongodb://localhost/mybbs",{
useUnifiedTopology: true,
useNewUrlParser: true,
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bbsRouter = require("./routes/bbsRoute");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 로컬호스트 요청하면 bbsrouter로전달
app.use("/bbs", bbsRouter);

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
