const { Newsletter } = require("../db");

const createNewsletter = async (email) => {
    const correo = await Newsletter.findOne({where : {email: email}});
    if(correo) throw new Error(`El email ${email} ya esta registrado`)
    const newEmail = await Newsletter.create({email})
    return newEmail
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