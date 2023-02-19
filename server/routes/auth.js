const express = require('express');
const{matchedData}= require("express-validator");
const { encrypt, compare} = require("../utils/handlePasswords");
const {validatorRegiterItem, validatorLoginItem} = require("../validators/authVal");
const route = express.Router();




//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register

//lista los items



//obtener detalle de usuario



//logeo de usuario

//crear usuario

route.post('/register',validatorRegiterItem, async (req, res)=> {
   
      req = matchedData(req);
      const passwordhash = await encrypt(req.passwordhash)
      const body = {...req, passwordhash}
      res.send({data:body})

 });
module.exports = route