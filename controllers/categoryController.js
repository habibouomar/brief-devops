import CategoryModel from "../models/Category.js";

export const getCategories = async (req, res, next) => {

    const categories = await CategoryModel.find({});
    
    try {
        res.render("pages/categories",{
            titlePage: "CategoryList",
            categories: categories,
        })
    } catch (error) {
        console.log(error);
    } 
}

export const postCategory = async (req, res, next) =>{
   
    const categoryName = req.body.categoryName;
    const categoryDesc = req.body.categoryDesc;

    await CategoryModel.create({categoryName, categoryDesc})

    res.redirect("/categories")
}

export const getCategoryById = async (req, res, next) => {

    const _id = req.params.id
    const category = await CategoryModel.findById(_id);
    
    try {
        res.render("pages/update-category",{
            titlePage: "Update Category",
            id: _id,
            category: category,
        })
    } catch (error) {
        console.log(error);
    } 
}

export const updateCategoryById = async (req, res, next) =>{
    
    const _id = req.body._id
    const categoryName = req.body.categoryName;
    const categoryDesc = req.body.categoryDesc;

    await CategoryModel.findByIdAndUpdate( _id,{categoryName, categoryDesc})
  
    res.redirect("/categories")
}

export const deleteCategoryById = async (req, res, next) =>{
    
    const categoryID = req.body._id
    const category = await CategoryModel.findByIdAndDelete({ _id: categoryID})
  
    res.status(200).json({category})
}