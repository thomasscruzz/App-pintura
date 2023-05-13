const express = require("express");
const path = require("path");
const app = express();
const productosRouter = require("./routes/productos.js");
const carpeta_styles=path.resolve(__dirname,"./public");
const mainRouter=require("./routes/main.js");

app.use(express.static(carpeta_styles));

app.use("/productos", productosRouter);
app.use("/", mainRouter);

app.listen(3000, () => { console.log("Servidor levantado"); });

app.set("view engine", "ejs");

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/home.html"))
// })

// app.get('/404',(req,resp)=>{
//     resp.send('Error página no encontrada')
//  })
 
// http://localhost:3000/
