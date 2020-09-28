import Product from '../models/Product';


export const createProduct = async (req, res) => {
    console.log(req.body);
    const {name, category, price, imgURL} = req.body;
    const newProduct = new Product({name, category, price, imgURL});
    const ProductSaved = await newProduct.save();
    res.status(201).json(ProductSaved);
   
}

export const getProducts =  async (req, res) => {
    const Products = await Product.find();
    res.status(200).json(Products);
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}

export const deleteProductById = (req, res) => {
    
}