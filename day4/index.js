//import
const express = require('express');
const {model} = require('mongoose');
const structModel = require('./model/studentdb');
const studentModel = require('./model/studentdb');
const cors = require('cors')
//Initialise
const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//Api create
//post data
app.post('/create',(req,res)=>{ 
    console.log(req.body);  
   var result = new studentModel(req.body);
    result.save();
    res.send("data added");
})

//to view
app.get('/see',async(req,res)=>{
   var data = await studentModel.find();
   res.json(data);
})

//delete
app.delete('/del/:id',async(req,res)=>{
    let id = req.params.id;
   await studentModel.findByIdAndDelete(id);
    res.send("deleted");



})



//update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("Updated the data");
})

//app.get(url,callback)
app.get('/view',(req,res)=>{
    res.json({"name":"Tiya","age":12})

})

//port
app.listen(8080,()=>{
    console.log("app is running in port 8080")
})