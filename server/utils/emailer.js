var config = require("../config");
var sendgrid  = require('sendgrid')(config.sendGridAPI);

module.exports = function(toEmail) {
    sendgrid.send({
        to:       toEmail,
        from:     'noreply@example.com',
        subject:  'Hello World',
        text:     'My first email through SendGrid.'
    }, function(err, json) {
        if (err) { return res.send(err); }
        res.send(json);
    });
};
