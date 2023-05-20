const main_controller = {
    home:(req,res)=>{
        res.render("home");
    },
    crearCuenta:(req,res)=>{
        res.render("crear-cuenta");
    },
    loggin:(req,res)=>{
        res.render("loggin");
    },
    recuperarPassword:(req,res)=>{
        res.render("recuperar-password");
    },
    cuentasRegistradas:(req,res)=>{
        let usuarios_creados=[
            {id:1, name:"Martillo"},
            {id:2, name:"Pincel"},
            {id:3, name:"Tacho de basura"},
            {id:4, name:"Pintura"}
        ];
        
        res.render("cuentas-registradas",{"usuarios":usuarios_creados});
    },
    

}
module.exports = main_controller;