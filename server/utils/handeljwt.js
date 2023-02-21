const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET
//pasar objeto del usuario
const tokenSign = async (Uname)=>{
const sign = jwt.sign(
    {
    _id: Uname._id,
    role: Uname.role,
   },
   process.env.JWT_SECRET,

);
return sign;

}


const verifyToken = async (tokenJwt)=>{
    try 
    {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } 
    catch (e) 
    {

        return null

    } 
}


module.exports={tokenSign, verifyToken}