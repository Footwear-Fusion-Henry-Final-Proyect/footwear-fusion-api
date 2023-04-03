// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
require("dotenv").config();
const { PROD_ACCESS_TOKEN } = process.env;

mercadopago.configure({
    access_token: PROD_ACCESS_TOKEN,
});

const createPreferenceHandlers = async (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.name,
                unit_price: parseInt(req.body.price),
                quantity: parseInt(req.body.quantity),
            }
        ],
        back_urls: {
            "success": "http://localhost:3001/mp/feedback",
            "failure": "http://localhost:3001/mp/feedback",
            "pending": "http://localhost:3001/mp/feedback"
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
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