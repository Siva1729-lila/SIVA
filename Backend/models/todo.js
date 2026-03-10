const mongoose = require('mongoose');
const todoSchema=new mongoose.Schema({
    task:{type:String,required:true},
    completed:{type:String,required:false}
})
module.exports=mongoose.model('Todo',todoSchema)