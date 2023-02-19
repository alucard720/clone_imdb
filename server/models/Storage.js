const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');


const StorageScheme = new mongoose.Schema(
  {
 url:String,
 filename:String
 },

  {
    versionKey: false,
    timestamps: true,
  }
);
StorageScheme.plugin(mongooseDelete,{overrideMethods:"all"});
module.exports = mongoose.model("storage", StorageScheme);