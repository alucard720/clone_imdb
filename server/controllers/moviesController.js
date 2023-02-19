const { matchedData } = require("express-validator");
const {MovieModel} = require("../models")
const {handleHttpError} = require("../utils/handleErrors")



//obtner lista base de datos
/** 
@param {*} req
@param {*} res

*/
const getItems = async (req, res) =>{
try {
    
    const data = await MovieModel.find({});
    res.send({data})
} catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
}
    
};
//obtner detalle

/** 
@param {*} req
@param {*} res

*/
//crear registro
const getItem = async (req, res) =>  {

try {
    req = matchedData(req);
    const {id} = req;
    const data = await MovieModel.findById(id);
    res.send({data});

} catch (e) {
    handleHttpError(res, 'ERROR_GET_ITEM')
}
};
/** 
@param {*} req
@param {*} res

*/

const CreateItems = async (req, res) =>{
try {
    req = matchedData(req);
    console.log(req);
    const data = await MovieModel.create(req);
    res.send({ data });
} catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');

}
    
};
//actualizar registro

/** 
@param {*} req
@param {*} res

*/

const UpdateItems = async (req, res) =>{

    try {
        const {id, ...body} = matchedData(req);
        const data = await MovieModel.findOneAndUpdate(
            id, body
        );
        res.send({data});
        } catch (e) {
            handleHttpError(res, 'ERROR_UPDATE_ITEMS');
        
        }
    
};
//eliminar un registro

/** 
@param {*} req
@param {*} res

*/

const DeleteItems = async (req, res) =>{

try{

    req = matchedData(req);
    const {id} = req;
    const data = await MovieModel.delete({_id:id});
    res.send({data});
}catch(e){


    handleHttpError(res, 'ERROR_DELETE_ITEMS');

    
}

};




module.exports = {getItems, getItem, CreateItems,UpdateItems,DeleteItems};