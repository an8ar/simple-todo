const BaseRouter = require('./base.router');
const TodoRouter = require('./todo.router');
const UserRouter = require('./user.router')

const authMiddleware = require('../middleware/auth-middleware')

class IndexRouter extends BaseRouter {
    routes() {
        this.router.use("/todo",authMiddleware,TodoRouter);
        this.router.use("/user", UserRouter);
    }
} 

module.exports = new IndexRouter().router