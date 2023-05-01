const connect = require('../db/db_connection');

class UserRepository {

    static async getData() {

        const UserModel = require('../models/userModel');

        const conn = await connect();
        const sql = "SELECT * FROM usuario";

        const [ rows ] = await conn.query(sql);
        const models = [];

        rows.forEach(element => {
            const model = new UserModel(element);
            models.push(model.data);
        });

        return models;
    }

}

module.exports = UserRepository;