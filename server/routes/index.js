const express = require('express');
const fs = require('fs');
const route = express.Router();


const PATH_ROUTE = __dirname;

const removeExtension = (filename) =>{
return filename.split('.').shift()
}

const a = fs.readdirSync(PATH_ROUTE).filter((file)=>{
    const name  = removeExtension(file)
    if(name !== 'index'){
        route.use( `/${name}`,require(`./${file}`))//TODO http://localhost:3001/api/movies
    }

})




module.exports = route