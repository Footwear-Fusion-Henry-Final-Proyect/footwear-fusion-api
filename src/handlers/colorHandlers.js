const { getcolor } = require("../controllers/colorControllers")

const getcolorHandlers = async (req, res) => {
    try {
        const color = await getcolor();
        res.status(201).json(color);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getcolorHandlers
}