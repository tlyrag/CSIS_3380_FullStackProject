
const getApiUrl = () => {

    
    return process.env.REACT_APP_API_URL || "http://localhost:5847"
};


const productApiUrl = (itemNumber) =>{
    return `${getApiUrl()}/products?limit=${itemNumber}`
} 
const addToCart = (id) =>{
    return `${getApiUrl()}/addtocart/${id}`
} 
const categoryApiUrl =() => {
    return `${getApiUrl()}/products/categories`
}

const singleProductUrl = (id) => {
    return `${getApiUrl()}/products/${id}`
}
const productByCategoryUrl =(category) => {
    return `${getApiUrl()}/products/category/${category}`
}

const apiUrls = {
    categoryApiUrl,
    productApiUrl,
    singleProductUrl,
    productByCategoryUrl,
    addToCart
}
export default apiUrls;


