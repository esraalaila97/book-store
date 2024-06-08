"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "kony2012",
    database: "book_store",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
});
//# sourceMappingURL=app-data-source.js.map