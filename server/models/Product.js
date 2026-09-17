const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

nameFr:{
  type:String
},

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  descriptionFr: String,

  description: String,
  category: {
    type: String,
    required: true,
  },
  imageUrl: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;