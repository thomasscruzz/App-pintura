const productos_controlador = {
    crear:(req,res)=>{
        res.render("crear-producto");
    },
    detalle:(req,res)=>{
        res.render("detalle-producto");
    },
    searchProducts:(req,res)=>{
        const search_users=req.query.search-query
        res.render("search-products");
        console.log(search_users);
    }
}
module.exports = productos_controlador;