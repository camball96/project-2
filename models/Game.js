const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

// game table.// updated

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        game_desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;