const { ColorProduct, TalleProduct } = require("../db");

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

const getTalles = async () => {
  const tallesBase = await TalleProduct.findAll({
      attributes: ['talle']
  });
  const arrTalles = tallesBase.map((dato) => {
      return dato.talle
    });
  const talleArr = arrTalles.join(",").split(",");

//este para poder sacarle los espacios en blanco a cada string
const quitarEspaciosTalle = [];
const tallesRegistrados = {};

talleArr.forEach((tem) => {
const talle = tem.trim();
if (talle !== '' && !tallesRegistrados[talle]) {
  quitarEspaciosTalle.push(talle);
  tallesRegistrados[talle] = true;
}
});

return quitarEspaciosTalle.sort();
}

module.exports = {
    getcolor,
    getTalles
}