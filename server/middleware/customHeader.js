const customHeader = (req, res , next)=>{
try {
    const api_key = req.headers.api_key;
    if (api_key === 'miguel01') {
        next()
    } else {
        res.status(403)
        res.send({error:"api key no es correcto"})
    }
} catch (e) {
    res.status(403)
    res.send({error:"something go wrong"})
}

}

module.exports = customHeader;