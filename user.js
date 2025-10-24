//Create a GET route /users/:id that returns User ID: {id}.
const express= require('express');
const app=express();
app.get('/',(req,res)=>{
    const UserID=12;
    res.send(`User ID:${UserID}`);
});
const PORT=23000;
app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`);
});