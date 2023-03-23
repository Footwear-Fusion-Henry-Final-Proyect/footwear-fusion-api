const { userCreate, getInfoUser, getAllUsers } = require("../controllers/userControllers");

const postUserHandler = (async (req, res) => {
    let {
        name,
        last_name,
        phone,
        address,
        userName,
        email,
        password
    } = req.body;
    try {
        let newUser = await userCreate(
            name,
            last_name,
            phone,
            address,
            userName,
            email,
            password);
        res.status(201).send(`El usuario ${name} ${last_name} fue creado con éxito`);
    } catch (e) {
        res.status(404).send(e.message)
    }
});

const getUsersHandler = (async (req, res) => {
    const user = req.query.search;
    try {
        if (user) {
            let infoUser = await getInfoUser(user);
            infoUser ? res.status(200).send(infoUser) :
                res.status(404).send(`No se encuentra el Usuario ${user}`);
        }
        else {
            let allUsers = await getAllUsers();
            allUsers ? res.status(200).send(allUsers) :
                res.status(404).send('Loading...');
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = {
    postUserHandler,
    getUsersHandler
}