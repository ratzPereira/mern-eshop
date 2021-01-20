import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//asyncHandler is a middleware that will deal with errors so we don't need to have try catch in all routes
// @desc Fetch all products
// @route GET /api/product
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc Fetch all products by id
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProductById, getProducts }
