import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "kony2012",
    database: "book_store",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})