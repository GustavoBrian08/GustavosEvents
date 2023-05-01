const UserController = require('../controllers/UserController')

const getRouter = (app) => {
    app.get('/user', async (req, res) => {
        const user = await UserController.getUser();

        res.send(user).json();
    });
}

const UserRoutes = (app) => {
    getRouter(app);
}

module.exports = UserRoutes