import {createConnection, Connection} from "typeorm";

//boilerplate

const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"

    //register all entities here
    entities: [User]
});