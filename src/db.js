const { Sequelize } = require("sequelize");
require("dotenv").config();


const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME_BD } = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME_BD}`,{logging:false} 
)

//Ejecuto los modelos:


//Relaciono los modelos:
//User 1------N Post



module.exports = {sequelize, ...sequelize.models};
