const { dataUserCreate, getInfoUser, getAllUsers } = require("../controllers/userControllers");
const {registreUser, loginUserControllers, loginGoogle} = require("../controllers/registroLoginControllers");

const postRegistroHandller = async (req, res) => {
    try {
        const {email, rol} = req.body;
        const user = await registreUser(email, rol);
        res.status(201).json(user)

    } catch (error) {
        res.status(400).json({error: "El usuario ya existe"})
    }
}

const postLoginUser = async (req, res) => {
    try {
        const {email} = req.body;

        const user = await loginUserControllers(email);
        res.status(201).json(user)

    } catch (error) {
        res.status(400).json({error: "El usuario no existe"})
    }
}

const postLoginGoogle = async (req, res) => {
    try {
        const {email} = req.body;

        const user = await loginGoogle(email);
        res.status(201).json(user)
        
    } catch (error) {
        res.status(400).json({error: error.menssage})
    }
}


const postUserHandler = async (req, res) => {
    let {
        name,
        last_name,
        phone,
        address,
    } = req.body;
    const {id} = req.params

    try {
        let newUser = await dataUserCreate(
            name,
            last_name,
            phone,
            address,
            id
            );
        res.status(201).json(newUser);
    } catch (e) {
        res.status(404).send(e.message)
    }
};

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
    getUsersHandler,
    postRegistroHandller,
    postLoginUser,
    postLoginGoogle
}