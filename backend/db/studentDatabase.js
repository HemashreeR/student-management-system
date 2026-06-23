const mongoose = require('mongoose')
require('dotenv').config()


const connect_db = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log('database connected!!')
    }
    catch(e){
        console.log('was not able to connect Database...')
    }
}

module.exports = {connect_db}