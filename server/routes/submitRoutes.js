var express = require("express");
var submitRouter = express.Router();
var answers = require("../answers");

// Takes the submitted answer and checks if it's correct
submitRouter.post("/:partNumber", function (req, res) {
    if (req.body.answer === answers[req.params.partNumber.toString()]) {
        var newPart = Number(req.params.partNumber) + 1;
        console.log("part" + newPart.toString());
        res.send({correct: true, nextUrl: "/part" + newPart.toString()});
    } else {
        res.send({correct: false});
    }
});

module.exports = submitRouter;