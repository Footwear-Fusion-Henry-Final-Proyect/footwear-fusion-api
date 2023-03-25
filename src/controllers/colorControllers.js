const { ColorProduct } = require("../db");

const getcolor = async () => {
    const colorBase = await ColorProduct.findAll({
        attributes: ['color']
    });
    const arrColores = colorBase.map((dato) => {
        return dato.color
      });
    const colorArr = arrColores.join(",").split(",");

//este para poder sacarle los espacios en blanco a cada string
const quitarEspaciosColor = [];
const coloresRegistrados = {};

colorArr.forEach((tem) => {
  const color = tem.trim();
  if (color !== '' && !coloresRegistrados[color]) {
    quitarEspaciosColor.push(color);
    coloresRegistrados[color] = true;
  }
});

return quitarEspaciosColor;
}

module.exports = {
    getcolor
}