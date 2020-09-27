var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose"); // mongoDB연동하기 위해 import
var dbConn = mongoose.connection; // db 연결 객체 생성

// db open이 성공하면 성공 메시지 console에 찍기
dbConn.once("open", function () {
  console.log("MongoDB Open OK");
});

// db와 연결하여 CRUD 과정에서 오류가 나면
// 오류메시지 console에 찍기
dbConn.on("error", function (error) {
  console.error(error);
});

// mongoDB 서버
mongoose.connect("mongodb://localhost/mytodolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
