"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_data_source_js_1 = require("../app-data-source.js");
const app = (0, express_1.default)();
const myRoute = require('.book-store.routes.js');
app.use('/', myRoute);
app_data_source_js_1.myDataSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
app.listen(3000, () => {
    console.log("Server is Successfully Running, and App is listening on port " + 3000);
});
//# sourceMappingURL=index.js.map