const {createTodo, getAllTodos} = require('../service/todo-service');


class TodoController {
    create = async(req,res)=>{
        const {task} = req.body
        const {id} =req.user;
        const result = await createTodo(task,id);
        res.json({result});
    }

    getAll = async (req,res)=> {
        const {id} =req.user;
        const todos = await getAllTodos(id);
        res.json({todos});
    }
}

module.exports = new TodoController()