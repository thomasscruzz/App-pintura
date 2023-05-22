const express = require("express");
const path = require("path");
const app = express();
const productosRouter = require("./routes/productos.js");
const carpeta_styles=path.resolve(__dirname,"./public");
const mainRouter=require("./routes/main.js");
const metohod=require("method-override");


app.use(express.static(carpeta_styles));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/products", productosRouter);
app.use("/", mainRouter);
app.use(metohod("_method"));

app.listen(3000, () => { console.log("Servidor levantado localhost:3000 "); });

app.set("view engine", "ejs");

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./views/home.html"))
// })

app.get('/404',(req,resp)=>{
     resp.send('Error página no encontrada')
 })
 
// http://localhost:3000/
