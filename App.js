const expres=require('express');

const app=expres();

 function addUserProperty(req,res,next){
    req.user="Guest";
    next();
 }
 app.get('/welcome', addUserProperty, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
});