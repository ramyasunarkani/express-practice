const express=require('express');

const server=express();
const userRoutes=require('./routes/userRoutes')
const productsRoutes=require('./routes/productRoutes') ;
const cartRoutes=require('./routes/cartRoutes')

server.use(express.static('public'))
server.use(express.json());
server.use('/users',userRoutes);
server.use('/api/products',productsRoutes);
server.use('/cart',cartRoutes);


server.listen(4000,()=>{
    console.log("server run on port 4000")
})