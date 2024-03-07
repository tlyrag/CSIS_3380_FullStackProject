const productApiUrl = (itemNumber) =>{
    return `https://fakestoreapi.com/products?limit=${itemNumber}`
} 

const categoryApiUrl =() => {
    return `https://fakestoreapi.com/products/categories`
}

const singleProductUrl = (id) => {
    return `https://fakestoreapi.com/products/${id}`
}
const productByCategoryUrl =(category) => {
    return `https://fakestoreapi.com/products/category/${category}`
}

const apiUrls = {
    categoryApiUrl,
    productApiUrl,
    singleProductUrl,
    productByCategoryUrl
}
export default apiUrls;


