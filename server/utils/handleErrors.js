
const handleHttpErrors= ( res, message = "Something Happen", code = 403)=>{
res.send({error:message})

}


module.exports = {handleHttpErrors};
















// const handleHttpErrors = (err, req, res, next)=>{
//     if(err.Uname ==="UnauthorizedError"){
//         res.status(401).json({error:"unathorized"});
//     }
// }