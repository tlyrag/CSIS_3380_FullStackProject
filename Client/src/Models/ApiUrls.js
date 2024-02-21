const productApiUrl = (itemNumber) =>{
    return `https://fakestoreapi.com/products?limit=${itemNumber}`
} 

const categoryApiUrl =() => {
    return `https://fakestoreapi.com/products/categories`
}

const apiUrls = {
    categoryApiUrl,
    productApiUrl
}
export default apiUrls;


