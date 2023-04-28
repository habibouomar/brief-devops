import ProductModel from "../models/Product.js";
import CategoryModel from "../models/Category.js";

export const postProduct = async (req, res, next) =>{
   
    const productName = req.body.productName;
    const categoryID = req.body.categoryID;
    const productPrice = req.body.productPrice;
    const productDesc = req.body.productDesc;

    await ProductModel.create({productName,categoryID,productPrice,productDesc})
  
    res.redirect("/")
}

export const getProducts = async (req, res, next) => {

    const products = await ProductModel.find().populate("categoryID");
    const categories = await CategoryModel.find({});
    
    try {            
        res.render("pages/homepage",{
            titlePage: "Homepage",
            products: products,
            categories: categories
        })
    } catch (error) {
        console.log(error);
    } 
}

export const getProductById = async (req, res, next) => {

    const _id = req.params.id
    const product = await ProductModel.findById(_id);

    try {        
        res.render("pages/delete-product",{
            titlePage: "Delete Product",   
            id: _id,
            product: product
        })
    } catch (error) {
        console.log(error);
    } 
}

export const getProductsByCategoryId = async (req, res, next) => {

    const _id = req.params.id
    const products = await ProductModel.find({categoryID: _id}).populate("categoryID");

    try {        
        res.render("pages/products-category",{
            titlePage: "Product by Category",   
            products: products
        })
    } catch (error) {
        console.log(error);
    } 
}

export const deleteProductById = async (req, res, next) =>{
    
    const _id = req.params.id
    await ProductModel.findByIdAndDelete({ _id})

    res.redirect("/")
}