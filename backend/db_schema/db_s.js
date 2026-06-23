const mongoose = require('mongoose')

const schema = mongoose.Schema({
    stuName : {
        type : String,
        required : true,
    },
    email : {
        type :String,
        required : true,
        unique : true
    },
    phone : {
        type : String,
        required : true
    },
    course : {
        type : String,
        required : true
    }

},{timestamps : true})

const db_model = new mongoose.model('studentData', schema)

module.exports = db_model