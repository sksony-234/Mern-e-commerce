const mongoose = require('mongoose');

const productScehma = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    discountedPrice:{type:Number},
    discuontPresent:{type:Number},
    quantity:{type:Number, required:true},
    brand:{type:String},
    color:{type:String},
    size:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageUrl:{type:String},
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Rating',
    }],
    review:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review',
    }],
    numRating:{type:Number, default:0},
    category:{type:mongoose.Schema.Types.ObjectId, ref:'Category'},
    createdAt:{type:Date, default:Date.now()},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;