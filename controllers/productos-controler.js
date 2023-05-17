const productos_controlador = {
    crear:(req,res)=>{
        res.render("crear-producto");
    },
    detalle:(req,res)=>{
        res.render("detalle-producto");
    }
}
module.exports = productos_controlador;