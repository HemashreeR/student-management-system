const express = require('express')
const db_model = require('../db_schema/db_s')

const router = express.Router()

router.route("/").get((req,res)=>{
    res.send(`<h1>Hey this is home page nice to meet you....</h1>`)
})

router.route('/studentDetails').post(async(req,res)=>{
    await db_model.create(req.body)
    res.status(200).json("data posted successfully....")
})

router.route('/studentDetails').get(async(req,res)=>{
    let data = await db_model.find()
    res.status(200).json(data)
})
router.route('/studentDetails/:id').delete(async(req,res)=>{
    const id = req.params.id
    await db_model.findByIdAndDelete(id)
    res.status(200).json("data deleted successfully")
})
router.route('/studentDetails/:id').patch(async(req,res)=>{
    const {id} = req.params
    const updatedStudent = await db_model.findByIdAndUpdate(
        id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedStudent)
})

module.exports = router