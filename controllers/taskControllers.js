

const Task=require('../models/taskModel')

const CreateTask=async(req,res)=>{


    try {
        const {title,desc,userId}=req.body
        const newTask=await Task.create({title,desc,owner:userId})
        res.status(200).json({msg:"user created",newTask})
    } catch (error) {
        res.status(500).json({msg:"something went wrong",error}) 
        
    }

}


const Delete=async(req,res)=>{


    try {
        const taskDeleted=await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"user deleted",taskDeleted})
    } catch (error) {
        res.status(500).json({msg:"something went wrong",error}) 
        
    }

}

const Get=async(req,res)=>{


    try {
        const tasks=await Task.find({owner:req.body.userId})
        res.status(200).json({msg:"Get all users Tasks",tasks})
    } catch (error) {
        res.status(500).json({msg:"something went wrong",error}) 
        
    }

}

const updatetask=async(req,res)=>{


    try {
        const updatetask=await Task.findByIdAndUpdate(req.params.x,req.body,{new:true})
        res.status(200).json({msg:"update users Tasks",updatetask})
    } catch (error) {
        res.status(500).json({msg:"something went wrong",error}) 
        
    }

}

    module.exports={CreateTask,Delete,Get,updatetask}
