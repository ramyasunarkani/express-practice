const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send( "Welcome to the Student & Course Portal API!");
})

module.exports=router;