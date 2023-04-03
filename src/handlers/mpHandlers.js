// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
require("dotenv").config();
const { PROD_ACCESS_TOKEN } = process.env;

mercadopago.configure({
    access_token: PROD_ACCESS_TOKEN,
});

const createPreferenceHandlers = async (req, res) => {
    const item = req.body.item
    const usuario = req.body.user
    console.log(req.body);
    console.log(usuario);
    let preference = {
        items: item,
        payer: {
			phone: {
				area_code: req.body.user.area_code,
				number: parseInt(req.body.user.number),
			},
			// address: {
			// 	zip_code: req.body.zip_code,
			// 	street_name: req.body.street_name,
			// 	street_number: parseInt(req.body.street_number)
			// },
			// email: req.body.email,
			// identification: {
			// 	number: req.body.number,
			// 	type: req.body.type
			// },
			// name: req.body.name,
			// surname: req.body.surname,
		},
		
        back_urls: {
            "success": "http://localhost:3000",
            "failure": "http://localhost:3000",
            "pending": ""
        },
        auto_return: "approved",
        binary_mode: true,
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                global: response.body
            });
        }).catch(function (error) {
            console.log(error);
        });
};

const feedbackHandlers = async (req, res) => {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
};

module.exports = {
    createPreferenceHandlers,
    feedbackHandlers
}