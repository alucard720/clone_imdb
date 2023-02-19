const mongoose = require('mongoose')

const dbConnect = () =>{

    const MONGOOSE_URI = process.env.MONGOOSE_URI;
    mongoose.connect(MONGOOSE_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err, res)=> {
        if(!err){
            console.log('Server Connection UP')
        }else{
            console.log('Connection Error')
        }
    }
    
    );
}


module.exports = dbConnect