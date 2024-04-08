import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    title:{type:String, required: true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,require:true},
    image:{type:String,required:true},


})
const cartSchema = new mongoose.Schema({
    productId: {type: Number, required:true},
    title:{type:String, required: true},
    price:{type:Number,required:true},
    image:{type:String,required:true},

})
const Cart = mongoose.model("Cart",cartSchema);

const Product = mongoose.model("Product",productSchema);

const databaseModel = {
    Product,
    Cart
}
export default databaseModel