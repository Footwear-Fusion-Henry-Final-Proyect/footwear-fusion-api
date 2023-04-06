require("dotenv").config();
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    //console.log(token);

    if (!token) return res.status(401).json({ message: "no token provided" }); //si el usuario no envia x-access-token, error

    const decoded = jwt.verify(token, SECRET); //extraigo lo que esta dentro del token

    req.userId = decoded.id;

    const user = await Usuario.findById(req.userId, { password: 0 }); //no preciso la contraseña
    console.log("user found", user);
    if (!user) return res.status(404), json({ message: "user not found" });

    next();
  } catch (error) {
    return res.status(404).json({ message: "unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await Usuario.findById(req.userId, { Rol: 1 }); // obtngo el rol del usuario

    if (!user) return res.status(404).json({ message: "user not found" });

    const roles = await roles.find({ _id: { $in: user.roles } }); // busco los roles del usuario

    if (!roles || roles.length === 0) {
      // verifico si el usuario tiene algun rol
      return res.status(401).json({ message: "administrator role required" });
    }

    const isAdmin = roles.some((role) => role.name === "admin"); // verifico si uno de los roles del usuario es 'admin'

    if (!isAdmin) {
      // si el usuario no es admin, devuelve error
      return res.status(405).json({ message: "administrator role required" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

module.exports = {
    verifyToken,
    isAdmin
}