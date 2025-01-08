const express=require('express');
const User=require('../models/users');
const jwt=require('jsonwebtoken')

const router=express.Router();

router.post('/register',async(req , res)=>{

    const{firstName,lastName,email,password,roleType}=req.body;
    try {
        let user=await User.findOne((email));
        if(user){
            return res.status(400).json({message:'User aleady exists'})
        }
        newUser=new User({
            firstName,
            lastName,
            email,
            password,
            roleType
        })

        await newUser.save();

        const payload={
            user:{
                id:newUser._id
            }
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({message:'User registered'})
    } catch (error) {
        console.error(error.message??'something went wrong')
        res.status(500).json({message:'Server error'})
    }
});

router.post('/login',async (req,res)=>{
    const{email,password}=req.body;
 
    try{
        const user= await User.findOne({email}); // finding if we have match with any email in our database
        if(!user){
            return res.status(400).json({message:'Invalid credentials'}); //if the email didnt match or password
 
        }
        //user is there now we have match password
        const isMatch= await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'}); //if the email didnt match or password
        }
 
        res.status(200).json({message:'Login succesffully',userId:user._id});
        //login succesffully, id of the user
 
    }
    catch(err){
        console.error(err.message??'Something went wrong');
        res.status(500).json({message:'Server Error'});
    }
 
 
 
 
});
 

module.exports = router;