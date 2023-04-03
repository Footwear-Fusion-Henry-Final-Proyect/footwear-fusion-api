const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");
const port = 3001

app.listen(port,()=>{
    sequelize.sync({ force: false });
    console.log(`Server levantado en puerto ${port}`)
})
