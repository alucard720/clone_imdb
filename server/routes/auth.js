const express = require('express');
const{matchedData}= require("express-validator");
const { encrypt, compare} = require("../utils/handlePasswords");
const {validatorRegiterItem, validatorLoginItem} = require("../validators/authVal");
const {userModel, usersModel} = require("../models");
const route = express.Router();
const bcrypt = require('bcryptjs')



//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register

//lista los items



//obtener detalle de usuario



//logeo de usuario

//crear usuario

route.post('/register',validatorRegiterItem, (req, res, next)=> {
   const user = new usersModel({
     email: req.body.email
   });
 
   bcrypt.hash(req.body.password, 10, (error, hashedPassword)=> {
     if(error) {return next(error);}
     user.set('password', hashedPassword);
     user.save(error=> {
       if(error) {return next(error);}
       return res.status(200).json(user);
     })
   });
 });
module.exports = route