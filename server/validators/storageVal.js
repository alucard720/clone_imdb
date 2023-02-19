const { check } = require('express-validator');
const {validateResult} = require("../utils/handelValidator")

const validatorCreateItem = [

check("filename").exists().notEmpty(),
check("url").exists().notEmpty(),
(res, req, next) => {
    return validateResult(res, req, next);
} 
];

const validatorgetItem = [
check("id")
.exists()
.notEmpty()
.isMongoId(), 

    (res, req, next) => {
        return validateResult(res, req, next);
    } 
    ];
module.exports = {validatorCreateItem, validatorgetItem};