import ProductModel from "../models/Product.js";

export const getProducts = async (req, res, next) => {
    
    try {
         let products = await ProductModel.find();

        console.log(products)
        
        res.render("pages/homepage",{
            titlePage: "Homepage",
            products: products
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

    const product = await ProductModel.create({productName, categoryID,productPrice,productDesc})
  
    res.status(201).json({product})
    console.log("Product Successful Create");
}

