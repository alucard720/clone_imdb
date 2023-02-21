const express = require('express');
const { loginCtrl, registerCtrl } = require('../controllers/authController');
const {validatorRegiterItem, validatorLoginItem} = require("../validators/authVal");
const route = express.Router();




//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register

//lista los items



//obtener detalle de usuario



//logeo de usuario

//crear usuario

route.post('/register',validatorRegiterItem, registerCtrl);
route.post('/login',validatorLoginItem, loginCtrl);
module.exports = route