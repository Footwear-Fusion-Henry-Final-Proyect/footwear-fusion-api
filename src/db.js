const { Sequelize } = require("sequelize");
require("dotenv").config();
const {
  userDataModels,
  userCategoriModels,
  userLoginModels,
  userStateModels,
} = require("./models/Usuarios/index");

const {
  producModels,
  productCategoriModels,
  productColorModels,
  productMarcaModels,
  productTallesModels,
} = require("./models/Productos/index");

const {
  reviewsPunctuation
} = require("./models/Reviews-Puntajes/index")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME_BD } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME_BD}`,
  { logging: false }
);

//Ejecuto los modelos:
 //User:
  userDataModels(sequelize),
  userCategoriModels(sequelize),
  userLoginModels(sequelize),
  userStateModels(sequelize),

  //Product:
  producModels(sequelize),
  productCategoriModels(sequelize),
  productColorModels(sequelize),
  productMarcaModels(sequelize),
  productTallesModels(sequelize),

  //Reviews
  reviewsPunctuation(sequelize)
  
  //Relaciono los modelos:
  //userdata 1 --- 1

  module.exports = { sequelize, ...sequelize.models };
