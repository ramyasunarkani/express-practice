const express=require('express');
const productsRouter=require('./routes/products');
const categoriesRouter=require('./routes/categories');

const app=express();


app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();

})

app.use('/products',productsRouter);

app.use('/categories',categoriesRouter);

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})