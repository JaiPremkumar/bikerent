const products = require('./data/product.json')
const product = require('./model/productModel')
const connectDb = require('./config/database')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path:path.join(__dirname,"config/config.env")})

const seedProduct=async () => {
    try {
        await connectDb
        await product.deleteMany()
        console.log("deleted")
        await product.insertMany(products)
        console.log('inserted')
    } catch (error) {
        console.log(err)
    }
    process.exit()
}
seedProduct()