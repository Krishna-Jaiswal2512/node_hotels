const mongoose = require('mongoose');
const MenuScehma = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    taste:{
        type: String,
        enum: ['spicy','sour','sweet'],
        required:true
    },
    id_drink:{
        type: Boolean,
        required:true
    },
    ingredients:{
        type: Array,
        required:true
    },
    num_sales:{
        type: Number,
        required:true
    }
});


const menuItem = mongoose.model('menuItem',MenuScehma);
module.exports = menuItem; 