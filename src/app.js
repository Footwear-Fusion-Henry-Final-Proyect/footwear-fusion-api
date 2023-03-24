const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./routes/productRouters");


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/product", productRouter)

module.exports = app;
