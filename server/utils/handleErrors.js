const handleHttpError= ( res, message = "Something Happen", code = 403)=>{
res.status(code);
res.send({error:message})

}


module.exports = {handleHttpError};