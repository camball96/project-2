const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

// game table

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
        review_ids: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'reviews',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;