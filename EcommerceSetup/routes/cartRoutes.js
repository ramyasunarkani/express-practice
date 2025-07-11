const express=require('express');
const router=express();
const cartControllers=require('../controllers/cartController')
router.get('/:id',cartControllers.userCarttItems);
router.post('/:id',cartControllers.addCartItem);




module.exports=router;