const express = require('express'); //fetches the express package
const cors = require('cors');
const app= express(); //app holds express

app.use(cors());

app.get('/',(req,res) =>{
    //send back hello from backend or your custom message
    res.send('Hello from backend');
});

const PORT =3001; // You can add any PORT of your choice
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}
    `));

