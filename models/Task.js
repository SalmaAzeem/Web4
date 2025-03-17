const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define(
    'Task',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.BOOLEAN, defaultValue: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false } //fk
    },
    {
        timestamps: false,
    }   
);

module.exports = Task;