import productApiUrl from '../Models/ApiUrls'

const getProductData = (numItem) => {
    return fetch(productApiUrl(numItem))
    .then(response=>response.json())
    .then(data=> data)
    .catch(err=> console.log(`Error consuming api ${err}`))
}
 
export default getProductData;