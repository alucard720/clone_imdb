const { check } = require('express-validator');
const {validateResult} = require("../utils/handelValidator")

const validatorCreateItem = [

check("title").exists().notEmpty(),
check("year").exists().notEmpty(),
check("director").exists().notEmpty(),
check("duration").exists().notEmpty(),
check("genre").exists().notEmpty(),
check("genre.0").exists().notEmpty(),
check("genre.1").exists().notEmpty(),
check("rate").exists().notEmpty(),


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

    const validateDataUpdate = [
        check("title").exists().notEmpty(),
        check("year").exists().notEmpty(),
        check("director").exists().notEmpty(),
        check("duration").exists().notEmpty(),
        check("genre").exists().notEmpty(),
        check("genre.0").exists().notEmpty(),
        check("genre.1").exists().notEmpty(),
        check("rate").exists().notEmpty(),
        (req, res, next) => {
          validateResult(req, res, next);
        },
      ];
module.exports = {validatorCreateItem, validatorgetItem, validateDataUpdate};