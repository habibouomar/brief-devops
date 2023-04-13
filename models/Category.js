import mongoose from "mongoose";

const {Schema} = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        require: true
    }, 
    categoryDesc: {
        type: String,
        require: true
    }
});

const CategoryModel = mongoose.model("category", categorySchema)

export default CategoryModel;
