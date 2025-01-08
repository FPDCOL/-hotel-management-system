const mongoose=require('mongoose');
require('dotenv').config();

const connection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log('Connected'))
    } catch (error) {
        console.error(error.message??'Not connected to database')
        process.exit(1)
    }
};


const useCollection=(collectionName)=>{
    return mongoose.connection.useCollection(collectionName)
}

module.exports=connection;