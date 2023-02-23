

const handleHttpErrors = (err, req, res, next)=>{
    if(err.Uname ==="UnauthorizedError"){
        res.status(401).json({error:"unathorized"});
    }
}


module.exports = {handleHttpErrors}









// const handleHttpError= ( res, message = "Something Happen", code = 403)=>{
// res.status(code);
// res.send({error:message})

// }


// module.exports = {handleHttpError};