const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Login extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Login.init(
    {
        id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newLoginData) => {
              newLoginData.password = await bcrypt.hash(newLoginData.password, 10);
              return newLoginData;
            },
            beforeUpdate: async (updatedLoginData) => {
              updatedLoginData.password = await bcrypt.hash(updatedLoginData.password, 10);
              return updatedLoginData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'login',
    }
);

module.exports = Login;