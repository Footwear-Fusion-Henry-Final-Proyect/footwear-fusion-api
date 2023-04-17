const { Newsletter } = require("../db");

// const createNewsletter = async (email) => {
//     const newEmail = await Newsletter.findOne({
//         where: {email},
//     })
//     !newEmail ? newEmail = await Newsletter.create(email) : throw newError(`${email} ya está registrado en nuestro Newsletter`)
// }

const createNewsletter = async (email) => {
    const newEmail = await Newsletter.findOne({
        where: {email},
    });
    if (!newEmail) {
        await Newsletter.create({ email });
    } else {
        throw new Error(`${email} ya está registrado en nuestro Newsletter`);
    }
}

const getNewsletter = async () => {
    const newsletter = await Newsletter.findAll({
        attributes: ['email']
    });
    const arrNewsletter = newsletter.map((dato) => {
        return dato.email
      });
    return arrNewsletter
}


module.exports = {
    createNewsletter,
    getNewsletter
}