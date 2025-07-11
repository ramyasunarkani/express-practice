const express=require('express');
const router=express();
const productsController=require('../controllers/productsController')

router.get('/',productsController.getAllProducts);
router.post('/',productsController.AddProduct);
router.get('/:id',productsController.getProductById);


module.exports=router;