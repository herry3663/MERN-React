const cookieParser = require('cookie-parser');
const dotenv=require ('dotenv');

const express = require('express');
const app=express();
app.use(cookieParser());

dotenv.config({path:'./config.env'})
require('./db');
// const User=require('./models/user')
app.use(express.json());
app.use(require('./routers/auth'))

const PORT=process.env.PORT;



// // middleWare:
// const middleWare=(req,res,next)=>{
//     console.log('hello middle');
//     next();

// app.get('/',(req,res)=>{
//     res.send('hello world')

// })
// app.get('/about',(req,res)=>{
//     res.send('hello about')

// })
// // app.get('/contact',(req,res)=>{
// //     res.send('hello contact')

// })
app.get('/signin',(req,res)=>{
    res.send('hello sing')

})
app.get('/signup',(req,res)=>{
    res.send('hello up')

})

app.listen(PORT,()=>console.log(`port is running on ${PORT}`));