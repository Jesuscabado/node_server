import connection from "../config/orm.js";
import Sequelize from "sequelize";

const Tournament = connection.define('tournament', {
    idstournament: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
},  
{
    freezeTableName: true,
    timestamps: false
});

export default Tournament;