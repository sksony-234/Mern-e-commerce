const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OrderItem',
    }],
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliveryDate:{type:Date},
    shippingAddress:{type:mongoose.Schema.Types.ObjectId, ref:'Address'},
    paymentDetails:{
        paymentMethod:{type:String},
        transactionId:{type:String},
        paymentId:{type:String},
        paymentStatus:{type:String, default:'PENDING'},
        totalPrice:{type:Number, required:true},
        totalDiscountedPrice:{type:Number, required:true},
        discount:{type:Number, required:true},
        orderStatus:{type:String, required:true},
        totalItem: { type: Number, required: true, required: true },
        createdAt:{type:Date, default:Date.now()},
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;