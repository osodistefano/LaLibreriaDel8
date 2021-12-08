//Requires
const express = require('express');
const app = express();

const mainRouter = require("./routes/main");
const productsRouter = require("./routes/products");

app.use(express.static( "../public"));
app.set("view engine", "ejs");

//Usa las rutas

app.use('/',mainRouter);
app.use("/products",productsRouter);

//Corre la aplicacion

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});