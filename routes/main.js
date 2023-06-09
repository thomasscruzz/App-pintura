const express = require("express");
const router = express.Router();
const main_controller = require("../controllers/main-controler.js");



// rutas, con el controler mandamos un id que ingresa a la ruta
router.get("/home", main_controller.home);
router.get("/loggin", main_controller.loggin);

router.get("/crear-cuenta", main_controller.crearCuenta);
router.post("/crear-cuenta", main_controller.store);

router.get("/recuperar-password", main_controller.recuperarPassword);



module.exports=router;