const express=require('express');

const main=express();
const homeRouter=require('./routes/home');
const studentRouter=require('./routes/students');
const coursesRouter=require('./routes/course');


main.use('/',homeRouter);
main.use('/students',studentRouter);
main.use('/courses',coursesRouter);



main.use((req, res) => {
    res.status(404).send('Page not found');
});


main.listen(3000,()=>{
    console.log("server run on server 3000");
})