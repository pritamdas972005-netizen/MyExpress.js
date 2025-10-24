//GET → Return all items
const express=require('express');
const app=express();
const items=[
    {id:1,name:'Pen'},
    {id:2,name:'Book'},
    {id:3,name:'Notebook'}
]
app.get('/',(req,res)=>{
    res.json(items);
 
});
const PORT =17000;
app.listen(PORT,()=>{
    console.log(`server is running at : http://localhost:${PORT}`);
});