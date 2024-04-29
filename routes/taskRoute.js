const express=require('express')
const router=express.Router()
const {CreateTask,Delete,Get,updatetask}=require('../controllers/taskControllers')
const userMiddleware = require('../middleware/userMiddleware')

router.post("/post",userMiddleware,CreateTask)
router.delete("/delete/:id",userMiddleware,Delete)
router.get("/get",userMiddleware,Get)
router.put("/put/:x",userMiddleware,updatetask)




module.exports=router