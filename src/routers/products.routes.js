const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productsController');
const path = require('path');
const multer =require('multer');
const upload = require('../middleWares/multerMid');
const { Router } = require('express');

//rutas de páginas de productos
routes.get("/product", productController.product);
routes.get("/cart", productController.cart);
routes.get("/create", productController.create);
routes.post("/create", upload.single('imagenes'), productController.store);
routes.get("/:id/edit", productController.edit);
routes.put("/:id/edit", productController.update);
module.exports = routes;