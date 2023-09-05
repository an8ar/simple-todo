const sequelize = require("../../db");
const { DataTypes } = require("sequelize");
const Todo  = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    task: {type: DataTypes.TEXT},
    completed: {type: DataTypes.BOOLEAN, defaultValue: false}
})
module.exports = {Todo}
