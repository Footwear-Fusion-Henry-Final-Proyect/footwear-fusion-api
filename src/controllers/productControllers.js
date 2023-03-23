const {
    CategoriProduct, 
    ColorProduct, 
    MarcaProduct, 
    TalleProduct, 
    Product
} = require("../db")

const createProduct = async (title,code,price,image,description,stock,productState) => {
    const newProduct = await Product.create({
        title,
        code,
        price,
        image,
        description,
        stock,
        productState
    })

    return newProduct;
}

const createMarcaProduct = async (marca) => {
  return await MarcaProduct.create({
        name: marca
    })
}

const createTalleProduct = async (talle) => {
    return await TalleProduct.create({
        talle: talle
    })
}

const createColorProduct = async (color) => {
    return await ColorProduct.create({
        color: color
    })
}

const createCategoryProduct = async (category) => {
    return await CategoriProduct.create({
        category: category
    })
}

const getProduct = async () => {
    const product = await Product.findAll({
        include:[
            {
                model: MarcaProduct,
                attributes: ['name'],
                through: { attributes: [] },
            },
            {
                model: CategoriProduct,
                attributes: ['category'],
                through: { attributes: [] },
            },
            {
                model: ColorProduct,
                attributes: ['color'],
                through: { attributes: [] },
            },
            {
                model: TalleProduct,
                attributes: ['talle'],
                through: { attributes: [] },
            }
        ]
    })

    return product;
}

const serchProduct = async (name) => {
    const result = await getProduct();
    const buscar = name.toLowerCase().trim();
    const filterProduct = result.filter((product) => {
      return product.title.toLowerCase().includes(buscar);
    });
  
    if(filterProduct.length) return filterProduct 
    throw new Error(`${name} no fue encontrado`);
  };
module.exports = {
    createProduct,
    createMarcaProduct,
    createTalleProduct,
    createColorProduct,
    createCategoryProduct,
    getProduct,
    serchProduct
}