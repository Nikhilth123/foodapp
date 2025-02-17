const express=require('express');
const router=express.Router();
const user=require('../models/users.js');
const {body,validationResult}=require('express-validator');
 const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const jwtsecret="mynameisnikhilthakurhellowhoareyou$#";



router.post('/createuser',
[body('email','invalid email').isEmail(),
    body('name').isLength({min:5}),
    body('password','invalid password, length must be greater than 5').isLength({min:5})],
    
    
    async(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

 const salt = await bcrypt.genSalt(10);
 let secpassword=await bcrypt.hash(req.body.password,salt);


    try{
       await user.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secpassword
        });
        res.json({success:true});
    }
    catch(err){
        console.log(err);
        res.json({success:false});
    }
});

router.post('/LoginUser',
    [body('email','invalid email').isEmail(),
        body('password','invalid password, length must be greater than 5').isLength({min:5})],
    
    
    async(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

    let email=req.body.email;
    console.log("Login Attempt for:", email);

        try{
           let userData=await user.findOne({email});
           console.log("Fetched User Data:", userData);
           if(!userData){
            return res.status(400).json({errors:"No user exist with this email first signup and then again login"});
           }

           console.log("Entered Password:", req.body.password);
           console.log("Stored Hashed Password:", userData.password);
           const pwdcompare=await bcrypt.compare(req.body.password,userData.password)
              console.log("Password Compare Result:", pwdcompare);
           if(!pwdcompare){
            return res.status(400).json({errors:"Try logging with correct credentials"})
           }
           const data={
            user:{
                id:userData.id
            },
           };

           console.log("JWT Secret:", jwtsecret);
           const authToken=jwt.sign(data,jwtsecret);
           

           console.log("Generated JWT Token:", authToken);
           return res.json({success:true,authToken:authToken});
        }
        catch(err){
            console.log("error in login user",err);
            res.json({success:false});
        }
    });
    
    





module.exports=router;