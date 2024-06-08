"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_model_1 = require("../entities/author.model");
const app_data_source_1 = require("app-data-source");
const router = express_1.default.Router();
const createAuthor = async (req, res) => {
    const authorName = req.query.authorName;
    await app_data_source_1.myDataSource.getRepository(author_model_1.Author).save({
        name: authorName
    });
    res.send("Author created successfully");
};
module.exports = {
    createAuthor,
};
//# sourceMappingURL=book-store.js.map