const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { decodeJwtMiddleware } = require("./middlewares/decodeToken");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", decodeJwtMiddleware, userRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (req.app.get("env") === "development") {
    // print error to console in development
    console.error(err);
    res.status(err.status || 500).send(err.message);
  } else {
    // render the error page in production
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = app;
