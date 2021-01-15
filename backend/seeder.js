import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    //getting the admin user, its the first one in our sample data
    const adminUser = createdUsers[0]._id

    //adding products with the admin id there
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    //now we add the products already with the admin id ( user: adminUser) <- see product model
    await Product.insertMany(sampleProducts)

    console.log('Data imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

//we want to run this script with node/backend/seeder -d to destroy or   node/backend/seeder to import
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
