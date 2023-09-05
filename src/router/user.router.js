const BaseRouter = require("./base.router");
const UserController = require("../controller/user-controller");
class UserRouter extends BaseRouter {
  routes() {
    this.router.post("/register", UserController.register);
    this.router.post("/login", UserController.login);
  }
}

module.exports = new UserRouter().router;
