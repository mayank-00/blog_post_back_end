const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const appConfig = require("./config/app");

const username = appConfig.DB_USER;
const password = appConfig.DB_PASSWORD;
const cluster = appConfig.DB_CLUSTER;
const dbname = appConfig.DB_NAME;

console.log("username ", username, " password ", password, " cluster ", cluster, " dbname ", dbname)

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

require('./middlewares/passport');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));


// Static file folder
app.use(express.static(path.join(__dirname, "public")));

// For parsing application/json
app.use(bodyParser.json({ limit: appConfig.BODY_PARSER_LIMIT }));

// For parsing application/xwww-
app.use(bodyParser.urlencoded({ limit: appConfig.BODY_PARSER_LIMIT, extended: true, parameterLimit: appConfig.BODY_PARAMETER_LIMIT }));

// Manage request for any domain Middleware
app.use(cors());

//Set router
const routes = require("./routes");

app.use("/", routes);

// app.use("/api/v1", [routes]);

const port = appConfig.PORT;
app.listen(port, function () {
  console.log(`listening on *:${port}`);
});

