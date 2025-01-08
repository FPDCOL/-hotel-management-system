const mongoose=require('mongoose');
const CrptoJs=require('crypto-js');

const UserSchema=new mongoose.Schema({

    fistName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    roleType:{
        type:String,
        required:true
    }
})

UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        return next();
    }
    this.password=CrptoJs.SHA512(this.password).toString();
    next();
})

UserSchema.method.matchPassword=async function(enterdPassword){
    const hashPassword=CrptoJs.SHA512(enterdPassword).toString();
    return hashPassword===this.password;
}

module.exports=mongoose.model('User',UserSchema);