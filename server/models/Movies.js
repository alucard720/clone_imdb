const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const MovieScheme = new mongoose.Schema(
  {
  title: String, // String is shorthand for {type: String}
  year: Number,
  director: String,
  duration:String,
  genre: {multiple: {"1stcat":String, "secondcat":String,}},
  rate:Number,
  },

  {
    versionKey: false,
    timestamps: true,
  },
);


MovieScheme.plugin(mongooseDelete,{overrideMethods:"all"});
module.exports = mongoose.model("movies", MovieScheme);