const { userCreate, getInfoUser, getAllUsers } = require("../controllers/userControllers");

const postUserHandler = (async (req, res) => {
    let {
        name,
        last_name,
        phone,
        address,
        userName,
        email,
        password,
        state,
        category
    } = req.body;
    try {
        let newUser = await userCreate(
            name,
            last_name,
            phone,
            address,
            userName,
            email,
            password,
            state,
            category);
        res.status(201).send(`El usuario ${name} ${last_name} fue creado con éxito`);
    } catch (e) {
        res.status(404).send(e.message)
    }
});

const getUsersHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const user = name ? await getInfoUser(name) : await getAllUsers()
        res.status(201).json(user)
    } catch (e) {
        res.status(404).send(e.message);
    }
};

module.exports = {
    postUserHandler,
    getUsersHandler
}