import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'
import { getProducts, getProductById } from '../controllers/productController.js'

// be careful, '/' and not './' lol!
router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

export default router