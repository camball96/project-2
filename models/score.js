const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model { }

// score table // updated

Score.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'review',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'score',
    }
);

module.exports = Score;