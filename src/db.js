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
} = require("./models/Reviews-Puntajes/index");

const { promocionesModels } = require("./models/Promociones");
const { newsletterModels } = require("./models/Newsletter");

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

  //promociones:
  promocionesModels(sequelize)

  //Newsletter:
  newsletterModels(sequelize)

  //Relaciono los modelos:
  const {
    Newsletter,
    CategoriProduct,
    ColorProduct,
    MarcaProduct,
    Product,
    TalleProduct,
    Promotions,
    ReviewsPuntuacion,
    CategoriUser,
    DataUser,
    LoginUser,
    UserState,
  } = sequelize.models
  
  //userdata 1 --- 1 loginUser
  LoginUser.hasOne(DataUser);
  DataUser.belongsTo(LoginUser);


  module.exports = { sequelize, ...sequelize.models };
