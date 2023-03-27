const { CategoriUser, DataUser, LoginUser, UserState } = require("../db");

const userCreate = async (
    name,
    last_name,
    phone,
    address,
    userName,
    email,
    password,
    state,
    category) => {
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

    let newUserState = await UserState.create({state})

    let newCategoriUser = await CategoriUser.create({category})

    await newDataUser.setLoginUser(newLoginUser)
    await newLoginUser.setDataUser(newDataUser)
    await newUserState.addLoginUser(newLoginUser)
    await newCategoriUser.addLoginUser(newLoginUser)
};

const getAllUsers = async () => {
    let allUsers = await LoginUser.findAll({
        attributes: ['email', 'userName',"id"],
        include: [{
            model: DataUser,
            attributes: ['id', 'name', 'last_name', 'phone', 'address'],},
            {
            model: UserState,
            attributes: ['state'],
            },
            {
            model: CategoriUser,
            attributes: ['category'],
        }
        ]
    });
    return allUsers;
};

const getInfoUser = async (name) => {
    const users = await getAllUsers();
    const buscar = name.toLowerCase().trim();
    const userEmail = users.filter((user) => {
        return user.email.toLowerCase().includes(buscar);
      });
    if(userEmail.length) return userEmail;

    const userName = users.filter((user) => {
        return user.userName.toLowerCase().includes(buscar);
      });
    if(userName.length) return userName;

    const dataName = users.filter((user) => {
        return user.DataUser.name.toLowerCase().includes(buscar);
      });
    if(dataName.length) return dataName;
    
    const dataLast_name = users.filter((user) => {
        return user.DataUser.last_name.toLowerCase().includes(buscar);
      });
    if(dataLast_name.length) return dataLast_name;

    const dataAddress = users.filter((user) => {
        return user.DataUser.address.toLowerCase().includes(buscar);
      });
    if(dataAddress.length) return dataAddress;

    const state = users.filter((user) => {
        return user.UserState.state.toLowerCase().includes(buscar);
      });
    if(state.length) return state;

    const categoriUser = users.filter((user) => {
        return user.CategoriUser.category.toLowerCase().includes(buscar);
      });
    if(categoriUser.length) return categoriUser;

    throw new Error(`No se encontron usuarios que coincidan con este dato: ${name}`);
};

module.exports = {
    userCreate,
    getInfoUser,
    getAllUsers
};
