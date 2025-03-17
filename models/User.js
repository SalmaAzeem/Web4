const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define(
    'User',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: { type: DataTypes.STRING },
    },
    {
        timestamps: false,
    }
);

module.exports = User;