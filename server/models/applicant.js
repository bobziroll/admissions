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
    }
}, {timestamps: true});

module.exports = mongoose.model("Applicant", applicantSchema);