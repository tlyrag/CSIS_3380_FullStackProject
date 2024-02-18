import productApiUrl from '../Models/ApiUrls'

const getCharacterData = () => {
    return fetch(productApiUrl)
    .then(response=>response.json())
    .then(data=> data)
    .catch(err=> console.log(`Error consuming api ${err}`))
}
 
export default getCharacterData;