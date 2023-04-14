import ProductModel from "../models/Product.js";
import CategoryModel from "../models/Category.js";

export const getProducts = async (req, res, next) => {
    
    try {
         let products = await ProductModel.find().populate("categoryID");
         let categories = await CategoryModel.find({});
        
        res.render("pages/homepage",{
            titlePage: "Homepage",
            products: products,
            categories: categories
        })

    } catch (error) {
        console.log(error);
    } 
}

export const postProduct = async (req, res, next) =>{
   
    const productName = req.body.productName;
    const categoryID = req.body.categoryID;
    const productPrice = req.body.productPrice;
    const productDesc = req.body.productDesc;

    await ProductModel.create({productName, categoryID,productPrice,productDesc})
  
    res.redirect("/")
    console.log("Product Successful Create");
}


export const getProductById = async (req, res, next) => {

    const _id = req.params.id
    const product = await ProductModel.findById(_id);

    try {        
        res.render("pages/delete-product",{
            titlePage: "delete-product",   
            id: _id,
            product: product
        })

    } catch (error) {
        console.log(error);
    } 
}

export const deleteProductById = async (req, res, next) =>{
    
    const _id = req.params.id
    await ProductModel.findByIdAndDelete({ _id})

    res.redirect("/")
    console.log("Product Successful deletion");
}

