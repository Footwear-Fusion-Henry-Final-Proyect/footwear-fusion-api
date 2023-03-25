const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

exports.validateUserRegistration = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = []; //guarda los errores durante la validacion del usuario

  if (!name) {
    errors.push("name is mandatory"); //'nombre es obligatorio'
  }

  if (!email) {
    errors.push("email is mandatory"); //'email es obligatorio'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    /* S+@\S+\.\S+ tiene que haber al menos un caracter delante de @, seguido por un punto,
                   tiene que haber al menos un caracter detras de @, un punto y al menos un caracter despues del punto*/
   errors.push("invalid email"); //el email no es valido
  }

  if (!password) {
    errors.push("password is requested"); //'la contraseña es obligatoria'
  } else if (password.length < 6) {
    errors.push("password must have at least 6 characters"); //'la contraseña debe tener al menos 6 caracteres'
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  next();
};

exports.validateUserLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) {
    errors.push("email is mandatory"); //'el email es obligatorio'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.push("invalid email"); //'El email no es válido'
  }

  if (!password) {
    errors.push("password is requested"); //'la contraseña es obligatoria'
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

exports.authenticateUser = (req, res, next) => {
  if (!req.session.user) {
    return res
      .status(401)
      .json({ message: "you must be logged in to access this route" }); //'debe iniciar sesion para acceder a esta ruta'
  }

  next();
};

module.exports = router;