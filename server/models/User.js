const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const UserSchema = new mongoose.Schema(
    {
        Uname:{type:String, },
        Email:{type:Number, unique:true},
        password:{type:String},
        Roles:{type:["user","admin"],
        default: "user",
    },
    },
    {
        timestamps:true,
        versionKey:false
    }
);
UserSchema.plugin(mongooseDelete,{overrideMethods:"all"});
module.exports= mongoose.model("User", UserSchema)
