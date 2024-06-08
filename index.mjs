import express from 'express';

import myDataSource from "./app-data-source.mjs";



const app = express();
const myRoute = require('./src/routes/book-store.routes.ts'); 
app.use('/', myRoute);  
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// createConnection().then(async connection => {
//   app.use(express.json());
//   app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
//   });
// }).catch(error => console.log(error));
app.listen(3000, () =>{ 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000)
    } 
);