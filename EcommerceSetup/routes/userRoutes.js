const express=require('express');
const router=express();
const userControoler=require('../controllers/userController')
router.get('/',userControoler.getUsers)
router.post('/',userControoler.getUsers)
router.get('/:id',userControoler.getUserById)


module.exports=router;