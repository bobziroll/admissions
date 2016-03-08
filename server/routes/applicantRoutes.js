var express = require("express");
var applicantRouter = express.Router();
var Applicant = require("../models/applicant");
var config = require("../config");
var Emailer = require("../utils/emailer");

applicantRouter.post("/", function (req, res) {
    var newApplicant = new Applicant(req.body);
    newApplicant.save(function (err, newObj) {
        if (err) {
            res.status(500).send(err)
        } else {
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
                // TODO: Move this into a separate module or function. Probably create a class and export it.
                // TODO: Send a second email to Sariah that includes the time it took the applicant to finish the project and their name & contact info.
                // TODO: Create a reponsive HTML email instead of the plain text. Check https://goo.gl/xoXPX1 for more details.
                Emailer.sendEmail({
                    to: applicant.email,
                    bcc: "bziroll@vschool.io",
                    from: "noreply@vschool.io",
                    subject: "Congratulations " + applicant.name + "! Welcome to V School!",
                    text: "You've shown that you've got what it takes to succeed at V School, and we're happy to let you know that you're now officially accepted! " +
                    "We will be following up with you soon to give you more information about the course, how to best prepare, and more.\nIf you have any " +
                    "questions in the meantime, feel free to send an email to info@vschool.io."
                }, function (err, json) {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        console.log(json)
                    }
                });

                // TODO: Set up error handling.
                // Might be a good idea to also have some error handling set up in Angular that waits for a response from sendgrid.
                // That way we can dynamically populate a message to the applicant if their email was incorrect, and perhaps give
                // them another chance to type it in correctly, instead of making them take the test all over again.

                res.send({success: true});

            }
        });
    });
});

module.exports = applicantRouter;
