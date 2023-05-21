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
   
    

}
module.exports = main_controller;