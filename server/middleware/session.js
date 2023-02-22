const { verifyToken } = require('../utils/handeljwt');
const {handleHttpError} = require('../utils/handleErrors')

const authMiddleware = async (res, req, next) => {


    try {

        if(!req.headers.authorization){
            handleHttpError(res, "NOT_TOKEN", 401);
            return;
        }
        
        const token = req.headers.authorization.split('').pop();
        const dataToken  = await verifyToken(token);

        if(!dataToken._id){

            handleHttpError(res, "ERROR_ID_TOKEN ",401)
            return
        }

        next()


    } catch (e) {
       handleHttpError(res, "ERROR NO SESSION", 401) 
    }
}

module.exports = authMiddleware;