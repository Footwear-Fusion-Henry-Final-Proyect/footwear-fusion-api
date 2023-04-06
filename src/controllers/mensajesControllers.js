//importamos transporte para mandar los correos
const {transporter} = require("../config/nodeMailer");

const mensajeBienvenida = async (email) => {
    await transporter.sendMail({
        from: '"FOOTWEAR FUSION" <pt10henry@gmail.com>',//quien envia el mensaje 
        to: email,//el email al que se va a mandar o varios email ej: to: ["bar@example.com, baz@example.com"].join(", ")
        subject: "Hola",//el titulo del correo 
        //el cuerpo del correo, puede ser tipo TEXT o HTML
        html: `<b>Hola ${email}<b/>,
        <a target="_blank" href="http://localhost:3000" >Bienvenido</a> 
        `,
    });
}

module.exports = {
    mensajeBienvenida
}