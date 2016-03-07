var express = require("express");
var applicantRouter = express.Router();
var Applicant = require("../models/applicant");
var nodemailer = require("nodemailer");

// nodemailer setup
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://bobziroll%40gmail.com:pass@smtp.gmail.com');

applicantRouter.post("/", function (req, res) {
    console.log("Trying to register a new person...");
    var newApplicant = new Applicant(req.body);
    newApplicant.save(function (err, newObj) {
        if (err) {
            res.status(500).send(err)
        } else {
            console.log("New person registered!");
            res.send(newObj)
        }
    });
});

applicantRouter.put("/:applicantId", function (req, res) {
    Applicant.findById(req.params.applicantId, function (err, applicant) {
        applicant.save(function (err, applicant) {
            if (err) {
                res.status(500).send(err)
            } else {
                console.log(applicant.timeTaken);
                res.send({success: true})
            }
        });
    });
});

module.exports = applicantRouter;
