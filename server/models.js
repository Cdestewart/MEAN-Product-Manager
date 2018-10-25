const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/BeltProducts',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));


const Products = new mongoose.Schema({
    name:{
        type: String,
        minlength: [3, "Product's name must be longer than 3 letters"],
        required: [true, "Product's name must have more than 3 characters"]},
    id:{
        type: Number,
        unique: true,
        requred: true,
    },
    price:{
        type: Number,
        min: [0, "Must have a price be greater than or equal to 0"],
        required: [true, "Must have a price"]
    },
    quantity:{
        type: Number,
        min: [0, "Must have a quantity be greater than or equal to 0"],
        required: [true, "Must have a quantity"]
    },
    displayPrice:{
        type:String
    },
    },
    {timestamps:true})

    Products.plugin(uniqueValidator, { message: "Product's ID must be unique." })
module.exports = mongoose.model("Products", Products);

