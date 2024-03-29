const jwt = require("jsonwebtoken");
require("dotenv").config();
const { LoginUser, Role, UserState, DataUser } = require("../db")
//importamos transporte para mandar los correos
// const {transporter} = require("../config/nodeMailer");

const {SECRET} = process.env;

// const registreUser = async (email, rol) => {
    
//     // Busca el estado "New" en la base de datos
//     const newStatus = await UserState.findOne({ where: { state: 'New' } });

//     const newUserRegister = await LoginUser.create({
//         email: email.toLowerCase(),
//     });

//     //Creo el rol
//     const newRolUser = await Role.create({Rol: rol});

//     //Asociacion del rol con el usuario
//     await newRolUser.addLoginUser(newUserRegister)

//     //Asociacion del status
//     await newStatus.addLoginUser(newUserRegister)

//     //Busco el usuario para incluir el rol
//     const userLogin = await LoginUser.findOne({
//         where: { id: newUserRegister.id },
//         include: [{
//             model: Role,
//             attributes: ['Rol'],
//         },
//         {
//             model: UserState,
//             attributes: ['state'],
//         }
//     ]});

//     //Genero el token
//     const token = jwt.sign({ id: newUserRegister.id }, SECRET, {
//         expiresIn: 3600, // 1 hora
//     });

//     //Devuelvo los datos que quiero
//     return user = {
//         id: userLogin.id,
//         email: userLogin.email,
//         rol: userLogin.Role.Rol,
//         state: userLogin.UserState.state,
//         token
//     };
// };

const registreUser = async (email, rol) => {
    const newUserRegister = await LoginUser.create({
            email: email.toLowerCase(),
    });

    //Creo dataUser
    const newDataUser = await DataUser.create({
            name: name,
            last_name: last_name,
            address: address,
            phone: phone
    });

    let newRolUser;
    if (rol) {
        // Busco el rol por nombre
        newRolUser = await Role.findOne({ where: { Rol: rol } });
        if (!newRolUser) {
            // Si el rol no existe, lo creo
            newRolUser = await Role.create({ Rol: rol });
        }
    } else {
        // Si no recibo un rol, le asigno el rol 'customer' por defecto
        newRolUser = await Role.findOne({ where: { Rol: 'customer' } });
    }

    // Busco el status por nombre
    const newStatus = await UserState.findOne({ where: { state: 'New' } });

    // Asociacion del rol con el usuario
    await newRolUser.addLoginUser(newUserRegister);

    // Asociacion del status
    await newStatus.addLoginUser(newUserRegister);

    // Busco el usuario para incluir el rol
    const userLogin = await LoginUser.findOne({
        where: { id: newUserRegister.id },
        include: [
            {
                model: Role,
                attributes: ['Rol'],
            },
            {
                model: UserState,
                attributes: ['state'],
            }
        ]
    });

    // Genero el token
    const token = jwt.sign({ id: newUserRegister.id }, SECRET, {
        expiresIn: 3600, // 1 hora
    });

    // Devuelvo los datos que quiero
    return {
        id: userLogin.id,
        email: userLogin.email,
        rol: userLogin.Role.Rol,
        state: userLogin.UserState.state,
        token
    };
};

const loginUserControllers = async (email) => {
    //Busco el usuario en la base de datos por su email 
    const userLogiado = await LoginUser.findOne({
        where: { email: email.toLowerCase() },
        include: [{
            model: Role,
            attributes: ['Rol'],
        },
        {
            model: UserState,
            attributes: ['state'],
        }
        ]
    });

    //Genero el token
    const token = jwt.sign({ id: userLogiado.id }, SECRET, {
        expiresIn: 3600, // 1 hora
    });

    //Devuelvo los datos que quiero
    return user = {
        id: userLogiado.id,
        email: userLogiado.email,
        rol: userLogiado.Role.Rol,
        state: userLogiado.UserState.state,
        token
    };
}

const loginGoogle = async (email) => {
    //Busco el usuario en la base de datos por su email 
    const buscarUser = await LoginUser.findOne({
        where: { email: email.toLowerCase() },
    });
    //si lo encuentro ejecuto la funcion login para darle acceso
    if (buscarUser) return await loginUserControllers(email);
    //si no la funcion registro para crearlo
    return await registreUser(email);

    /*Esto es porque al iniciar con google firebase le da acceso directo a la app
    y necesito una forma  de crear el usuario en nuestra base o de darle acceso si ya esta creado */

}

module.exports = {
    registreUser,
    loginUserControllers,
    loginGoogle
}