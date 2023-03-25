const { getcolor, getTalles } = require("../controllers/arrayFilterControllers")

const getcolorHandlers = async (req, res) => {
    try {
        const color = await getcolor();
        res.status(201).json(color);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getTalleHandlers = async (req, res) => {
    try {
        const talle = await getTalles();
        res.status(201).json(talle);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getcolorHandlers,
    getTalleHandlers
}