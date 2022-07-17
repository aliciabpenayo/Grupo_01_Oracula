const express = require('express');
const routes = express.Router();
const userController = require('../controllers/usersController');
const path = require('path');
//const upload = require('../middleWares/multerMid');

//rutas de páginas de usuarios
routes.get("/login", userController.login);
routes.get("/signup", userController.signup);
routes.post("/signup", userController.store);
routes.get("/:id/edit", userController.edit);
routes.put("/:id/edit", userController.update);
routes.delete("/:id/delete", userController.delete);
routes.get("/perfil", userController.perfil)

module.exports = routes;