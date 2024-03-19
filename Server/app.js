import express from 'express';
import bodyParser from 'body-parser';
import dataController from './Controllers/DataController.js';
import DataRoutes from './Routes/DataRoutes.js';


const app = express();
const port =  5847;

app.use(bodyParser.urlencoded({ limit:'50mb', extended: false, parameterLimit: 50000}));
app.use(bodyParser.json({limit: '50mb'}));

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-cREDENTIALS', 'true');
    next();
})

app.listen(port, () => console.log(`========== Server Started At Port ${port} ==========`))
DataRoutes(app);