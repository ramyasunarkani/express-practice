const express=require('express');
const router=express();

router.get('/',(req,res)=>{
    res.send('Fetching all users')
})
router.post('/',(req,res)=>{
    res.send('Adding a new user')
})
router.get('/:id',(req,res)=>{
    const userId=req.params.id;
    res.send(`Fetching user with ID:${userId}`)
})


module.exports=router;