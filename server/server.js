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

app.get("/getPassword", function (req, res) {
    res.status(400).send({password: answers["3"]});
});

app.use("/api/part", require("./routes/submitRoutes"));

app.listen(port, function () {
    console.log("Server listening on port " + port);
});
