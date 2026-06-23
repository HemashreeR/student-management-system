const { connect_db } = require("./db/studentDatabase");
require('node:dns').setServers(['8.8.8.8','1.1.1.1'])

const express = require('express')
const app = require("./src/app");
const port = 5000
const cors = require('cors')
connect_db()
app.use(cors())
app.use(express.json())
app.listen(port,()=>{
    try{
        console.log(`Server is running on http://localhost:${port}`)
    }
    catch(e){
        console.log("there was an error creating server",e)
    }
})