const mongoose=require("mongoose")

// var mongoURL = mongoDb url(not given for security reasons)
var mongoURL ='mongodb+srv://arnab:2@u8qSpTcxLmyMe@cluster0.qbiwo.mongodb.net/mern-pizza'


mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('. . . Mongo DB Connection Successfull . . .');
})

db.on('error' , ()=>{
    console.log(`. . . Mongo DB Connection failed . . .`);
})

module.exports =mongoose



















