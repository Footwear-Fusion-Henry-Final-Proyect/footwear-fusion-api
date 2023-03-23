const {createProduct, createMarcaProduct, createTalleProduct, createColorProduct, createCategoryProduct, getProduct, serchProduct} = require("../controllers/productControllers")
const { MarcaProduct, TalleProduct, ColorProduct, CategoriProduct } = require("../db")

const createProductHandler = async (req, res) => {
    try {
    const {
        title,
        code,
        price,
        image,
        description,
        stock,
        productState,
        marca,
        talle,
        color,
        category
    } = req.body;

    const newProduct = await createProduct(
        title,
        code,
        price,
        image,
        description,
        stock,
        productState
    )

    const newMarca = await MarcaProduct.findOne({
        where: {
          name: marca,
        },
    })
    
    const newTalle = await TalleProduct.findOne({
        where: {
          talle: talle,
        },
    })

    const newCalor = await ColorProduct.findOne({
        where: {
          color: color,
        },
    })

    const newCategory = await CategoriProduct.findOne({
        where: {
            category: category,
        },
    })

    let addMarca;
    let addTalle;
    let addColor;
    let addCategory;

    if(newMarca){
        newProduct.addMarcaProduct(newMarca)
    }  
    if(!newMarca) {
        addMarca = await createMarcaProduct(marca);
        newProduct.addMarcaProduct(addMarca);
    }

    if(newTalle){
        newProduct.addTalleProduct(newTalle)
    }  
    if(!newTalle) {
        addTalle = await createTalleProduct(talle);
        newProduct.addTalleProduct(addTalle);
    }

    if(newCalor){
        newProduct.addColorProducts(newCalor)
    }  
    if(!newCalor) {
        addColor = await createColorProduct(color);
        newProduct.addColorProducts(addColor);
    }

    if(newCategory){
        newProduct.addCategoriProduct(newCategory)
    }  
    if(!newCategory) {
        addCategory = await createCategoryProduct(category);
        newProduct.addCategoriProduct(addCategory);
    }

    res.status(201).json(newProduct);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getProductHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const product = name ? await serchProduct(name) : await getProduct();
        res.status(201).json(product)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    createProductHandler,
    getProductHandler
}
