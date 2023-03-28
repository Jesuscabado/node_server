import connection from "../config/orm.js";
import Sequelize from "sequelize";

const stadium = connection.define('stadium', {
    idstadim: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(120),
        allowNull: true,
    }
},  
{
    freezeTableName: true,
    timestamps: false
});

export default stadium;