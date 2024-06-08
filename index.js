"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app_data_source_js_1 = require("./app-data-source.js");
var app = express();
var myRoute = require('.book-store.routes.js');
app.use('/', myRoute);
app_data_source_js_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
// createConnection().then(async connection => {
//   app.use(express.json());
//   app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
//   });
// }).catch(error => console.log(error));
app.listen(3000, function () {
    console.log("Server is Successfully Running, and App is listening on port " + 3000);
});
