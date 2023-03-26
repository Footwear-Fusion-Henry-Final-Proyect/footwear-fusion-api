import Users from "../Models/Users"
import jwt from "jsonwebtoken"
import Usuarios from "../models/Usuarios/";
import { LoginUser } from "../models/Usuarios/loginUser";
import Roles from "../Models/Roles"

export const singUp = async (req, res) => {
res.json ("signup");

};




export const singIn = async (req, res) => {
    res.json ("signin");

};

