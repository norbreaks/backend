const mongoose = require('mongoose');
const { Product } = require('./Product');

const cartSchema =new mongoose.Schema({
   Product:[
    {
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    }
   ],
   total:{
    type:Number
   }
})

const Cart =mongoose.model("Cart",cartSchema);
module.exports ={Cart};