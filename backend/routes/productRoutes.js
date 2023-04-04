import express from "express";
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


const router = express.Router()

//@des Fetch all products
//@route GET /api/products
//@access Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))


//@des Fetch single product
//@route GET /api/products/:id
//@access Public
router.get('/:id', asyncHandler(async (req, res) => {
    var product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Product not Found" })
    }
}))

export default router