import DataController from "../Controllers/DataController.js"
import StaticData from "../Constants/StaticData.js"

export default(app) => {
    // Check if server is up and running
    app.get('/api/v1/health-check',(req,res) => {
        res.json({
            ok:true,
            data:{},
            msg:"Server is open and running."
        });
    });

    app.get('/products/categories',async (req,res) => {
    
        try {
            const categoryList = await DataController.getCategoryLists(StaticData.data);
            
            res.json(categoryList)
        }
        catch(error) {
            res.json({
                ok:false,
                error:error
            })
        }

    })

    app.get('/products',async (req,res) => {
        const limit = req.query.limit;
       
        try {
            console.log(StaticData.data)
            const productList = await DataController.getProductList(limit,StaticData.data);
            
            res.json(productList)
        }
        catch(error) {
            res.json({
                ok:false,
                error:error
            })
        }
  
    
    })

    app.get('/products/:id',async (req,res) => {
        const id = req.params.id;
        try {
            const product = await DataController.getProduct(id,StaticData.data);
            res.json(product)
        } catch(error) {
            res.json({
                ok:false,
                error:error
            })
        }
    })

    app.get('/products/category/:category',async (req,res)=> {
        const category = req.params.category;
        try {
            const productList = await DataController.getProductByCategory(category,StaticData.data);
            res.json(productList)
        } catch(error) {
            res.json({
                ok:false,
                error:error
            })
        }
    })

}