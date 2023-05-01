const UserRepository = require('../repositories/UserRepository');
const UserModel = require('../models/userModel');

class UserController {

    static async getUser() {
        const user = await UserRepository.getData();

        return user;
    }
}

module.exports = UserController;