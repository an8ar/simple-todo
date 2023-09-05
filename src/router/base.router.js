const Router = require( 'express');

class BaseRouter {
    router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(){};
}

module.exports = BaseRouter;
