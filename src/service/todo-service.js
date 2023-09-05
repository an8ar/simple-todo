const { Todo } = require("../entity/todo");

const createTodo = async (task, id) => {
  return await Todo.create({ task, userId: id });
};
const getAllTodos = async (id) => {
  return await Todo.findAll({ where: { userId: id } });
};

module.exports = { createTodo, getAllTodos };
