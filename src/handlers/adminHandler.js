const { crearUserAdmin } = require("../controllers/adminControllers");

const createAdminHandlers = async (req, res) => {
    try {
        const {email, rol} = req.body;
        const newUser = await crearUserAdmin(email, rol);
        if(newUser) res.status(201).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createAdminHandlers
}