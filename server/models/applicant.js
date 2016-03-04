var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var applicantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    timeTaken: {
        type: String,
        default: "Not yet completed"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

applicantSchema.pre("save", function (next) {
    if (!this.isNew) {
        this.setTimeTaken();
    }
    next();
});

applicantSchema.methods.setTimeTaken = function () {
    var applicant = this;
    var ms = Date.now() - this.createdAt;
    var x = ms / 1000;
    var seconds = Math.floor(x % 60);
    x /= 60;
    var minutes = Math.floor(x % 60);
    x /= 60;
    var hours = Math.floor(x % 24);
    applicant.timeTaken = hours + "h:" + minutes + "m:" + seconds + "s";
};

module.exports = mongoose.model("Applicant", applicantSchema);
