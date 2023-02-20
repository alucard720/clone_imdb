const express = require('express');
const{matchedData}= require("express-validator");
const {usersModel} = require("../models")
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
      const password = await encrypt(req.password);
      const body = {...req, password};
      const data = await usersModel.findOne({email:"mike@hotmail.com"});
      // const data = await usersModel.create(body);
      // data.set('password', undefined, {strict:false});
      res.send({data});

 });
module.exports = route