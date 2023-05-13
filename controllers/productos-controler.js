const productos_controlador = {
    index:(req,res)=>{
        res.send("Aca estan todos los productos");
    },
    crear:(req,res)=>{
        res.send("Creemos un producto ! ");
    },
    detalle:(req,res)=>{
        
        res.sendFile(path.join(__dirname,"../views/productos.html"))
    }
}
module.exports = productos_controlador;