// const app = require("./src/app.js");
// const { sequelize } = require("./src/db.js");
// const port = 3001

// app.listen(port,()=>{
//     sequelize.sync({ force: false });
//     console.log(`Server levantado en puerto ${port}`)
// })
// app.listen(443, () => {
//     console.log('Servidor corriendo en https://fusion-footwear.vercel.app/');
//   });


const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");
const port = 443;
require('dotenv').config();
const {PORT} = process.env;

app.listen(PORT, () => {
    
    //app.listen(port, 'fusion-footwear.vercel.app', () => {
sequelize.sync({ force: false });
  //console.log(`Server levantado en https://fusion-footwear.vercel.app:${port}`);
console.log('Server levantado en', process.env.PORT);
});
