const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs/dist/bcrypt');
const express=require('express');
const authenticate=require("../middleware/authenticate");

const router=express.Router();



require('../db');
const User=require("../models/user");



router.get('/',(req,res)=>{
    res.send('hello there')
})
// register page:
router.post('/register',async(req,res)=>{
    // console.log()
    // res.send(req.body)
    const{name,email,phone,work,password,cpassword}=req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"incorrect vlaue"});
    
    }
   try {
    const userExist=await User.findOne({email:email});
    if(userExist){
        return res.status(422).json({error:"Already exists"})
     }
     const user= new User({name,email,phone,work,password,cpassword});
     
    
     const register=await user.save();
      if (register){
         return  res.status(201).json({message:"successfully stored"})
      }
     

     
    
    
    
   } catch (error) {
    console.log(error);
   }
})

// LOgin page:

router.post('/signin',async(req,res)=>{
    // console.log(req.body);
    // res.json({msg:"success"});
    try {
        const{email, password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"please fill the data"})
        }
        const login =await User.findOne({email:email});
        // password varification:
        if(login){    
            const isMatch= await bcrypt.compare(password,login.password);
            // token generate:
           token =await login.generateAuthToken();

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
                
            if(!isMatch){
            res.status(400).json({error:"Invalid Credentials"})
            }else{
                res.json({msg:"success"})
            }
        }else{
            res.status(400).json({error:"Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error);
    }
})

// About us page:
router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
})

// contact us page: home page as well:
router.get('/getData',authenticate,(req,res)=>{
    res.send(req.rootUser);
})
router.post('/contact',authenticate,async(req,res)=>{
   
    try {
        const {name,email,phone,message}=req.body;
        if(!name || !email || !phone || !message){
            return res.json({error:"invalid input"})
        }
        const userContact=await User.findOne({_id:req.userID})
        if(userContact){
            const userMessage=await userContact.addMessage(name,email,phone,message)
            await userContact.save();
            res.status(201).json({msg:"send successfully"})
        }
    } catch (error) {
        console.log(error)
    }
})
// Logout page:
router.get('/logout',authenticate,(req,res)=>{
    res.clearCookie("jwtoken",{path:'/'});
    res.status(200).send("logout successfully");
});

module.exports=router;