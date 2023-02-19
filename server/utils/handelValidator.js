const {validationResult} = require('express-validator');

const validateResult = (res, req, next) => {
    try {
        validationResult(req).throw()
        return next() //TODO continua al contolador
    } catch (err) {
        res.status(403)
        res.send({errors : err.array()})
    }
}

module.exports = {validateResult};