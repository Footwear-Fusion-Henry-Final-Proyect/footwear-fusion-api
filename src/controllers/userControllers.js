const { CategoriUser, DataUser, LoginUser, UserState } = require("../db");

const userCreate = async (
    name,
    last_name,
    phone,
    address,
    userName,
    email,
    password) => {
    let newDataUser = await DataUser.create({
        name,
        last_name,
        phone,
        address
    })
    let newLoginUser = await LoginUser.create({
        userName,
        email,
        password
    })
    await newDataUser.setLoginUser(newLoginUser)
    await newLoginUser.setDataUser(newDataUser)
};

const getAllUsers = async () => {
    let allUsers = await DataUser.findAll({
        attributes: ['id', 'name', 'last_name', 'phone', 'address'],
        include: [{
            model: LoginUser,
            attributes: ['email', 'userName'],
            // through: {
            //     attributes: []},
            // },
            // {
            // model: UserState,
            // attributes: ['state'],
            // through: {
            //     attributes: [],}
            // },
            // {
            // model: CategoriUser,
            // attributes: ['category'],
            // through: {
            //     attributes: [] },
        }]
    });
    return allUsers;
};

const getInfoUser = async (user) => {
};

module.exports = {
    userCreate,
    getInfoUser,
    getAllUsers
};
