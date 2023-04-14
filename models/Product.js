import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    categoryID:{
        type: mongoose.Types.ObjectId,
        ref: 'category'
    }, 
    productPrice: Number,
    productDesc: String
});

const ProductModel = mongoose.model('product',productSchema);

export default ProductModel;
