const express = require('express'); //fetches the express package
const cors = require('cors');
require('dotenv').config();
const connection=require('./config/db');


const authRoutes=require('./routes/authRouter')
const app= express(); //app holds express

connection()
app.use(cors());
const DBPORT=process.env.PORT||3001;


app.use('/api/auth',authRoutes)

app.get('/',(req,res) =>{
    //send back hello from backend or your custom message
    res.send('Hello from backend');
});

const PORT =3001; // You can add any PORT of your choice
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}
    `));

