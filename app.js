const express = require("express");
const path = require("path");
const app = express();
const rutaProductos = require("./routes/productos.js");
const carpeta_styles=path.resolve(__dirname,"./public");

app.use(express.static(carpeta_styles));

app.use("/productos", rutaProductos);

app.listen(3000, () => {
    console.log("Servidor levantado");
});

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/home.html"))
// })

// app.get('/404',(req,resp)=>{
//     resp.send('Error página no encontrada')
//  })
 
// http://localhost:3000/
