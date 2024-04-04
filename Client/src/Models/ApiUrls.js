
const getApiUrl = () => {
    try {
        console.log(`This is the env variable ${process.env.REACT_APP_API_URL}`);
        console.log(`this is the enviroment ${process.env.NODE_ENV}`)
    } catch {   
        console.log("Not working")
    }
    
    return process.env.REACT_APP_API_URL || "http://localhost:5847"
};


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


