const main_controller = {
    home:(req,res)=>{
        res.render("home");
    },
    crearCuenta:(req,res)=>{
        res.render("crear-cuenta");
    },
    store:(req,res)=>{
        let dataUsuario={
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email:req.body.email,
            password:req.body.password
        }
        res.send(dataUsuario);
    },
    loggin:(req,res)=>{
        res.render("loggin");
    },
    recuperarPassword:(req,res)=>{
        res.render("recuperar-password");
    }
   
    

}
module.exports = main_controller;