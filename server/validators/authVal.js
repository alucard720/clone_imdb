const { check } = require('express-validator');
const {validateResult} = require("../utils/handelValidator")

const validatorRegiterItem= [
check("Uname")
.exists()
.notEmpty()
.isLength({min:3, max:99}), 
check("Email")
.exists()
.notEmpty()
.isEmail(),
check("password")
.exists()
.notEmpty()
.isLength({min:8, max:15}), 

    (res, req, next) => {
        return validateResult(res, req, next);
    } 
    ];


    const validatorLoginItem= [
        check("Email")
        .exists()
        .notEmpty(),
        check("Password")
        .exists()
        .notEmpty()
        .isLength({min:3, max:99}), 
        
            (res, req, next) => {
                return validateResult(res, req, next);
            } 
            ];
    
   
module.exports = {validatorRegiterItem, validatorLoginItem};