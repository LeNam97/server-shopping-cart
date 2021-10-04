const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  description:{
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
  },
  thumbnail:{
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true
  }
})
module.exports =mongoose.model('Product', ProductSchema)
