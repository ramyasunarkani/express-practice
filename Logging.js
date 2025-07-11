const express=require('express');
const app=express();


app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();

})

app.get('/products',(req,res)=>{
    res.send('Here is the list of all products.');
})
app.post('/products',(req,res)=>{
    res.send('A new product has been added.');
})

app.get('/categories',(req,res)=>{
    res.send('Here is the list of all categories.');
})
app.post('/categories',(req,res)=>{
    res.send('A new category has been added.');
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})