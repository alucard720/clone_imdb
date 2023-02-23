const express = require('express');
const route = express.Router();
const {validatorCreateItem,validatorgetItem} = require("../validators/movieVal");
const {getItems, getItem, CreateItems, UpdateItems, DeleteItems} = require("../controllers/moviesController");
const authMiddleware = require('../middleware/session');

//TODO http://localhost/movies GET,POST, UPDATE,DELETE

//lista los items

route.get("/",authMiddleware,getItems);


//obtener detalle de items
route.get("/:id", validatorgetItem, getItem);

//crear un item
route.post("/",  validatorCreateItem, CreateItems);

//actualizar un item

route.put("/:id", validatorgetItem, validatorCreateItem, UpdateItems);

//borrar un item
route.delete("/:id", validatorgetItem, validatorCreateItem, DeleteItems);

module.exports = route