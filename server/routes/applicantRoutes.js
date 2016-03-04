var express = require("express");
var applicantRouter = express.Router();
var Applicant = require("../models/applicant");

applicantRouter.post("/", function (req, res) {
    var newApplicant = new Applicant(req.body);
    newApplicant.save(function (err, newObj) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send({success: true, applicantInfo: newObj})
        }
    });
});

applicantRouter.put("/:applicantId", function (req, res) {
    Applicant.findById(req.params.applicantId, function (err, applicant) {
        applicant.save(function (err, applicant) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send({success: true, timeTaken: applicant.timeTaken})
            }
        });
    });
});

module.exports = applicantRouter;
