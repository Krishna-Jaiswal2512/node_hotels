const mongoose = require('mongoose');
const WorkerScehma = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    work:{
        type: String,
        enum: ['chef','waiter','Manager'],
        required:true
    },
    mobile:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum: ['male','female'],
        required:true
    },
    Salary:{
        type:Number,
        required:true
    }
});


const Worker = mongoose.model('Worker', WorkerScehma);
module.exports = Worker; 