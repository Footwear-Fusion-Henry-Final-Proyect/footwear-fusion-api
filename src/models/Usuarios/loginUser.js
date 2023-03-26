const { DataTypes } = require("sequelize");
const bcryptjs = require('bcryptjs');


module.exports = (sequelize) => {
  const loginUsers = sequelize.define("LoginUsers", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // roles: [{//roles que puede tener un usuario, relacion de uno a muchos
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // }]
  }, { 
    timestamps: false });

  // Método para cifrar la contraseña
  loginUsers.beforeCreate(async (user) => {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
  });

  // Método para comparar la contraseña ingresada con la almacenada en la base de datos
  // this.loginUsers.prototype.comparePassword = async function (password, receivedPassword) {
  //   return await bcryptjs.compare(password, receivedPassword);
  // };

  return loginUsers;
};

//module.exports = {loginUsers};