const { LoginUser, Role, UserState } = require("../db");
const { getProduct } = require("./productControllers");
const { registreUser } = require("./registroLoginControllers");


const crearUserAdmin = async (name, last_name, address, phone, email, rol) => {
  console.log(name, last_name, address, phone, email, rol, 'controller');
  let currentUser;
  const user = await LoginUser.findOne({
    where: { email: email.trim().toLowerCase() },
  });
  if (rol !== "admin" && rol !== "customer")
    throw new Error(`El ${rol} no existe` );

  user ? currentUser = user : currentUser = await registreUser(name, last_name, address, phone, email, rol.trim()); 

  return currentUser;
};

const adminProductId = async (pruductId) => {
  const product = await getProduct();
  const productId = product.find(product => product.id === pruductId);
  if(productId) return productId;
  throw new Error(`${pruductId} no encontrado`);
}

module.exports = {
  crearUserAdmin,
  adminProductId
};
