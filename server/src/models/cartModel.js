const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    cartItems :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CartItem",
        required:true,
    }],
    totalPrice:{type:Number, default:0},
    totalItem:{type:Number, default:0},
    totalDiscountedPrice:{type:Number, default:0},
    discount:{type:Number, default:0},
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;