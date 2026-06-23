const express = require('express')
const router = require('../routes/routes')
const cors = require('cors')
require('node:dns').setServers(['8.8.8.8','1.1.1.1'])

const app = express()
app.use(cors())
app.use(express.json())


app.use('/',router)

module.exports = app