const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");


class User extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: 6,
			},
		},
	},
	{
		hooks: {
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},
			async beforeUpdate(userData) {
				userData.password = await bcrypt.hash(userData.password, 10);
				return userData;
			}

		},
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
		individualHooks: true,
	}
);

module.exports = User;
