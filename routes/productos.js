// sistema de ruteo de productos
const express = require("express");
const router = express.Router();
const producto_contoler = require("../controllers/productos-controler.js");



// rutas, con el controler mandamos un id que ingresa a la ruta
router.get("/detalle-producto", producto_contoler.detalle);
router.get("/productos-registrados", producto_contoler.productosRegistrados);
router.get("/crear-producto", producto_contoler.crear);
router.get("/search", producto_contoler.searchProducts);




module.exports=router;

