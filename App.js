const expres=require('express');

const app=expres();
app.use((req,res,next)=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.");

})
app.listen(3000);