import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


const getProducts = asyncHandler(async(req,res) =>{
    const pageSize = 12 
    const page = Number(req.query.pageNumber) || 1
    const brandQuery = req.query.brandQuery ? {
        brand:{$regex: req.query.brandQuery,
            $options: 'i',}
    }:{}
    const keyword = req.query.keyword ? {
        category:{$regex: req.query.keyword,
            $options: 'i',},
    }: {}

    
    const count = await Product.countDocuments({...keyword,...brandQuery})
    
    
    const products = await Product.find({...keyword,...brandQuery}).limit(pageSize).skip(pageSize * (page-1))
     
    res.json({products,page,pages:Math.ceil(count/pageSize)}) 
})

const getProductById = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id) 

    if(product){
        res.json(product)
    }else{ 
        res.status(404)
        throw new Error('product not found')
    }
})

const getProductsByCategory = asyncHandler(async(req,res) =>{

    let product= await Product.find(req.query)
    

    if(product){
        res.json(product)
        
    }else{
        res.status(404)
        throw new Error('product not found')
    }
})

//delete product
const deleteProduct = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove()
        res.json({message: 'Product removed'})
    }else{
        res.status(404)
        throw new Error('product not found')
    }
})




//create product
const createProduct = asyncHandler(async(req,res) =>{
    const product = new Product({
        name:'Sample name',
        price:0,
        user:req.user._id,
        image: '/image/sample.jpeg',
        brand:'sample brand',
        category: 'sample category',
        countInStock:0,
        numReviews: 0,
        description:'sample description'   
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})


//update product
const updateProduct = asyncHandler(async(req,res) =>{
    const {name,price,description,category,image,brand,countInStock} =req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock




        const updatedProduct = await product.save()
    res.json(updatedProduct)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})


//review product
const createProductReview  = asyncHandler(async(req,res) =>{
    const {rating,comment} =req.body

    const product = await Product.findById(req.params.id)

    if(product){
        const alreadyReviewed = product.reviews.find(r=>r.user.toString() === req.user._id.toString())
        if (alreadyReviewed){
            res.status(400)
                throw new Error ('Product already reviewed')
            
        }
        const review = {
            name: req.user.name,
            rating :Number(rating),
            comment,
            user:req.user._id
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc,item)=>item.rating + acc ,0)/product.reviews.length
        await product.save()
        
    res.status(201).json({message:'Review Added'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})


//top rated products
//get/api/products
const getTopProducts  = asyncHandler(async(req,res) =>{
    const products = await Product.find({}).sort({rating:-1}).limit(5)
    res.json(products)
})



export {
    getProducts,getProductById,deleteProduct,createProduct,updateProduct,createProductReview,getTopProducts,getProductsByCategory
}