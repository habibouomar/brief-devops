import CategoryModel from "../models/Category.js";

export const getCategories = async (req, res, next) => {
    
    try {
        let categories = await CategoryModel.find({});
        let tagline = "Here is the complete list of our product categories.";
        
        res.render("pages/categories",{
            titlePage: "CategoryList",
            categories: categories,
            tagline: tagline
        })
    } catch (error) {
        console.log(error);
    } 
}

export const postCategory = async (req, res, next) =>{
   
    const categoryName = req.body.categoryName;
    const categoryDesc = req.body.categoryDesc;

    const category = await CategoryModel.create({categoryName, categoryDesc})
  
    res.status(201).json({category})
    console.log("Category Successful Create");
}

export const updateCategoryById = async (req, res, next) =>{
    
    const _id = req.body._id
    const categoryName = req.body.categoryName;
    const categoryDesc = req.body.categoryDesc;

    const category = await CategoryModel.findByIdAndUpdate( _id,{categoryName, categoryDesc})
  
    res.status(200).json({category})
    console.log("Category Successful update");
}

export const deleteCategoryById = async (req, res, next) =>{
    
    const categoryID = req.body._id
    const category = await CategoryModel.findByIdAndDelete({ _id: categoryID})
  
    res.status(200).json({category})
    console.log("Category Successful deletion");
}