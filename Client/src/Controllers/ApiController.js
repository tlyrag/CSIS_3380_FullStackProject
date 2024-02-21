import apiUrls from '../Models/ApiUrls'

const getProductData = (numItem) => {
    return fetch(apiUrls.productApiUrl(numItem))
    .then(response=>response.json())
    .then(data=> data)
    .catch(err=> console.log(`Error consuming api ${err}`))
}
 

const getproductCategory = () => {
    return fetch(apiUrls.categoryApiUrl())
    .then(response=>response.json())
    .then(data=>data)
    .catch(err=> console.log(`Error consuming api ${err}`));
}

const apiController ={
    getProductData, 
    getproductCategory
}
 

export default apiController

