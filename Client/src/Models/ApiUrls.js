const env = "local";

const getApiUrl = ()=> {
    if(env==="local") {
        return "http://localhost:5847";
    }
    return "https://fakestoreapi.com"
}


const productApiUrl = (itemNumber) =>{
    return `${getApiUrl()}/products?limit=${itemNumber}`
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
    productByCategoryUrl
}
export default apiUrls;


