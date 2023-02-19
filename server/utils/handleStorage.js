 const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(res, file, cb){
        const pathStorage =   `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    
    filename: function(res, file, cb){
        // TODO: mi-cv.pdf etc
    
        const ext = file.originalname.split(".").pop(); //TODO["NAME","png"]
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    },
    
    
    });
    
const uploadMiddleware = multer({storage})
   
    
module.exports = uploadMiddleware;