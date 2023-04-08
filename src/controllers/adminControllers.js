const { LoginUser, Role, UserState } = require("../db");
const { registreUser } = require("./registroLoginControllers");

const crearUserAdmin = async (email, rol) => {
  const user = await LoginUser.findOne({
    where: { email: email.trim().toLowerCase() },
  });

  if (user) throw new Error("El usuario ya existe" );

  if (rol !== "admin" && rol !== "Customer")
    throw new Error("El Rol no existe" );

  const newUser = await registreUser(email, rol.trim());

  return newUser;
};

module.exports = {
  crearUserAdmin,
};
