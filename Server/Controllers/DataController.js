
export default {
    async getCategoryLists  (dataArray)  {
        const categoryList = [];
        
        dataArray.map(data=> {
            if(!categoryList.includes(data.category)) {
                categoryList.push(data.category)
            }
        })
        
        return categoryList;
    },

    async getProductList(limit,dataArray) {
        let int = 0;
       

        if(limit>dataArray.length) {
            limit = dataArray.length;
        }

        let productList =[]
        while (int<limit) {
            productList.push(dataArray[int])
            int++;
        }
        return productList;
    },

    async getProduct(id,dataArray) {
        return dataArray.find(element => element.id == id);
    },

    async getProductByCategory(category,dataArray) {
        return dataArray.filter((product) => product.category==category)
    }
}