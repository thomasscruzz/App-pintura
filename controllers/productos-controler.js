const productos_controlador = {
    crear:(req,res)=>{
        res.send("Creemos un producto ! ");
    },
    detalle:(req,res)=>{
        
        res.sendFile(path.join(__dirname,"../views/productos.html"))
    }
}
module.exports = productos_controlador;