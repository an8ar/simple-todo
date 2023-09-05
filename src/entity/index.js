const {Todo}  = require('./todo');
const {User} = require('./user');

User.hasMany(Todo);
Todo.belongsTo(User);
module.exports = {User, Todo}