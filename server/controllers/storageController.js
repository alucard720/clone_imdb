const fs = require("fs");
const { matchedData } = require("express-validator");
const {StorageModel} = require("../models");
const handleHttpError = require("../utils/handleErrors");



const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;


//obtner lista base de datos
/** 
@param {*} req
@param {*} res

*/
const getItems = async (req, res) =>{
 try {
    const data = await StorageModel.find({});    
    res.send({data})
 } catch (e) {
    handleHttpError(res, 'ERROR_LIST_ITEMS');
 }


};
//obtner detalle

/** 
@param {*} req
@param {*} res

*/

const getItem = async (req, res) =>  {

    try {
        const {id} = matchedData(req) 
        const data = await StorageModel.findById(id);
        res.send({data});
    
    } catch (e) {
        handleHttpError(res, 'ERROR_DETAIL_ITEM')
    }
    };


//crear registro

/** 
@param {*} req
@param {*} res

*/

const CreateItems = async (req, res) =>{    
try {
    const {body, file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await StorageModel.create(fileData)
    res.send({data})
} catch (e) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');

}
};
//actualizar registro

/** 
@param {*} req
@param {*} res

*/

const UpdateItems = (req, res) =>{};
//eliminar un registro

/** 
@param {*} req
@param {*} res

*/

const DeleteItems = async(req, res) =>{
    try {
        const{id} = matchedData(req)
        const dataFile = await StorageModel.findById({id});
        const filename =dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filename);
        const data ={
            filePath,
            delete: 1
        }
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEMS')
    }
}




module.exports = {getItems, getItem, CreateItems,UpdateItems,DeleteItems};

