const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  brand:{
    type:String,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  material:{
    type:String
  },

  color:{
    type:String
  },

  size:{
    type:[String]     // ⭐ multiple sizes
  },

  price:{
    type:Number,
    required:true
  },

  image:{
    type:[String]
  }

},{
  timestamps:true
});

module.exports = mongoose.model("Product", productSchema);