// sistema de ruteo de productos
const express = require("express");
const router = express.Router();
const producto_contoler = require("../controllers/productos-controler.js");



// rutas, con el controler mandamos un id que ingresa a la ruta
router.get("/:idProducto", producto_contoler.detalle);
router.get("/:idProducto/crear-producto", producto_contoler.crear);




module.exports=router;

