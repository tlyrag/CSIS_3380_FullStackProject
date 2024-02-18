import characterUrl from "../Models/ApiUrls";

const getCharacterData = () => {
    return fetch(characterUrl)
    .then(response=>response.json())
    .then(data=> data)
    .catch(err=> console.log(`Error consuming api ${err}`))
}
 
export default getCharacterData;