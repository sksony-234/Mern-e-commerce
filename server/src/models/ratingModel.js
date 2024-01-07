const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    rating:{type:Number, required:true},
    createdAt:{type:Date, default:Date.now()},
});

const Rating =mongoose.model('Rating', ratingSchema);

module.exports = Rating;