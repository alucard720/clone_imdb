const { verifyToken } = require('../utils/handeljwt');
const {handleHttpErrors} = require('../utils/handleErrors')

const authMiddleware = async (res, req, next) => {


}

module.exports = authMiddleware;



// try {

//     if(!req.headers.authorization){
//         handleHttpErrors(res, "NOT_TOKEN", 401);
//         return;
//     }
    
//     const token = req.headers.authorization.split('').pop();
//     const dataToken  = await verifyToken(token);

//     if(!dataToken._id){
//         next();
//         handleHttpErrors(res, "ERROR_ID_TOKEN ",401)
//         return
//     }

//     next()


// } catch (e) {
//    handleHttpErrors(res, "ERROR NO SESSION", 401) 
// }