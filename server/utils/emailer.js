var config = require("../config");
var sendgrid = require('sendgrid')(config.sendGridAPI);

function Emailer() {
    this.sendEmail = function (emailObj, callback) {
        if (typeof emailObj !== "object") {
            return new Error("You must provide an email object to the Emailer");
        }
        var sgEmail = new sendgrid.Email(emailObj);
        sendgrid.send(sgEmail, function (err, json) {
            callback(err, json);
        });
    };
}

module.exports = new Emailer();
