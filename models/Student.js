const mongoose = require('mongoose');
const { Schema } = mongoose;

let StudentSchema = new Schema({
    rollNo: { type: String, required: true},
    firstName: { type: String },
    lastName: { type: String },
    fatherName: { type: String },
    adhrCardNo : { type: String },
    mobileNo : { type: String }
})


module.exports = mongoose.model('Student', StudentSchema)