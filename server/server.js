var express = require("express");
var app = express();
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var answers = require("./answers");

var port = process.env.PORT || 8001;

mongoose.connect("mongodb://localhost/admissions");

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/getPassword", function (req, res) {
    res.status(400).set("Password", answers["3"]).send();
});

app.use("/api/part", require("./routes/submitRoutes"));
app.use("/api/applicant", require("./routes/applicantRoutes"));

// TODO: Write unit tests for this app, frontend and backend

app.listen(port, function () {
    console.log("Server listening on port " + port);
});
