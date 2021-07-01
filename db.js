const mongoose=require("mongoose")
const mongoLink=require('./mongoLink.js')

var mongoURL = mongoLink.link

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull . . .');
})

db.on('error' , ()=>{
    console.log(`. . . Mongo DB Connection failed . . .`);
})

module.exports =mongoose



















