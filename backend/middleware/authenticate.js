const jwt=require ('jsonwebtoken');
const User=require("../models/user");

const authenticate=async(req,res,next)=>{

    try {
        const token = req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){throw new Error('user not found')}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    } catch (error) {
        res.status(401).send("no token")
        console.log(error)
    }

}

module.exports=authenticate;