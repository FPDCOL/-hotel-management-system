/*const express=require('express');
const User=require('../models/users');

const router=express.Router();

router.post('/login',async(req , res)=>{

    const{email,password}=req.body;
    try {
        let user=await User.findOne((email));
        if(!user){
            return res.status(400).json({message:'User not found'})
        }
        let isMatch=User.matchPassword(password)
        if(!isMatch){
            return res.status(400).json({message:'Incorrect Password'})
        }
    } catch (error) {
        console.error(error.message??'something went wrong')
        res.status(500).json({message:'Server error'})
    }
});
*/
