const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    const a=2;
    const b=3;
    const s=a+b;
    res.send(`Result: ${s}`);
});
app.get('/about',(req,res)=>{
    res.json({id:1,name:'pritam'});
});
const PORT=45000;
app.listen(PORT,()=>{
    console.log(`Server is Running at:http://localhost:${PORT}/about`);
});