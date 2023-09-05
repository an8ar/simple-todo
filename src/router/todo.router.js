const BaseRouter = require("./base.router");
const TodoController = require("../controller/todo-controller");
class TodoRouter extends BaseRouter {
  routes() {
    this.router.get("/", TodoController.getAll);
    this.router.post("/", TodoController.create);

    this.router.get("/:id", (req, res, next) => {
    });

    this.router.put("/:id", (req, res, next) => {
    });

    this.router.delete("/:id", (req, res, next) => {
    });
  }
}

module.exports = new TodoRouter().router;
