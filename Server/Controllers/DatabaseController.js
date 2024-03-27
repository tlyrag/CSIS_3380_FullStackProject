import mongoose from "mongoose";
import dbModel from "../Model/DatabaseProductModel.js"
import testList from "../Model/StaticData.js"

const URI = "mongodb://127.0.0.1/Product";

const connect = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const getAllProducts = async () =>{;
    const product = await dbModel.Product.find()
    return product
    }


const createData  = async () => {
    testList.data.forEach(async product => {
        const id = product.id;
        const title = product.title;
        const price = product.price;
        const description= product.description;
        const category = product.category;
        const image = product.image;
        const rating = product.rating;

        const newProduct = new dbModel.Product({
            id,
            title,
            price,
            description,
            category,
            image,
            rating
        })
        await newProduct.save();
    })
    
}

const mongodb ={
    connect,
    getAllProducts,
    createData
}
export default  mongodb

