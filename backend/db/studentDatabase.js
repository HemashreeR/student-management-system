const mongoose = require('mongoose')

const connect_db = ()=>{
    try{
        mongoose.connect('mongodb+srv://hema143maha_db_user:ETqgRx5gfNtrHQED@backend-practice.qxihv1c.mongodb.net/Hemashree')
        console.log('database connected!!')
    }
    catch(e){
        console.log('was not able to connect Database...')
    }
}

module.exports = {connect_db}