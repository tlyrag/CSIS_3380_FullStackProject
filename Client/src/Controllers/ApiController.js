import apiUrls from '../Models/ApiUrls'

const getProductData = (numItem) => {
    
    return fetch(apiUrls.productApiUrl(numItem))
    
    .then(response=>response.json())
    .then(data=> {

        return data
    })
    .catch(err=> console.log(`Error consuming api ${err}`))
}

const addtocart =(id) => {
    return fetch(apiUrls.addToCart(id), {method:'POST'})
    .catch(err=> console.log(`Failed to add to cart ${err}`))
}

const getproductCategory = () => {
    return fetch(apiUrls.categoryApiUrl())
    .then(response=>response.json())
    .then(data=>data)
    .catch(err=> console.log(`Error consuming api ${err}`));
}

const getProductbyId =(id) => {
    return fetch(apiUrls.singleProductUrl(id))
    .then(response=> response.json())
    .then(data=>data)
    .catch(err=> console.log(`Error consuming api ${err}`))

}
const getproductByCategory = (category) => {
    return fetch(apiUrls.productByCategoryUrl(category))
    .then(response=> response.json())
    .then(data=>data)
    .catch(err=> console.log(`Error consuming api ${err}`))
}
const apiController ={
    getProductData, 
    getproductCategory,
    getProductbyId,
    getproductByCategory,
    addtocart
}
 

export default apiController

