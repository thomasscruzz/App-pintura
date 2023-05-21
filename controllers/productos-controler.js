const productos_controlador = {
    crear:(req,res)=>{
        res.render("crear-producto");
    },
    detalle:(req,res)=>{
        res.render("detalle-producto");
    },
    productosRegistrados:(req,res)=>{
        let productos=[
            {id:1, name:"Martillo"},
            {id:2, name:"Pincel"},
            {id:3, name:"Tacho de basura"},
            {id:4, name:"Pintura"}
        ];
        
        res.render("productos-registrados",{"productos":productos});
    },
    searchProducts:(req,res)=>{
        let busquedaProductos=req.query.busqueda;
         let productos=[
             {id:1, name:"martillo"},
             {id:2, name:"pincel"},
             {id:3, name:"tacho"},
             {id:4, name:"pintura"}
         ];

         let rtaProductos=[];

         for(let i=0;i<productos.length;i++){
            if(productos[i].name.includes(busquedaProductos)){
                rtaProductos.push(productos[i]);
            }
         }
         res.render("rta-productos", {rtaProductos: rtaProductos} );
    },
}
module.exports = productos_controlador;