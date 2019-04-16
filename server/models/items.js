/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const items = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },

  category: {
    type: mongoose.type.ObjectId,
    ref: 'Category',
    required: true,
    unique: false,
  },

  price: {
    type: Number,
    required: true,
    unique: false,
  },

  discount: {
    type: Number,
    required: false,
    unique: false,
    max: 100,
  },

  quantity: {
    type: Number,
    required: true,
    unique: false,
    default: 1,
  },

  num_sold: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },

  seller: {
    type: mongoose.type.ObjectId,
    ref: 'Users',
    required: true,
    unique: false,
  },

  images: [
    {
      url: {
        type: String,
        required: true,
        unique: false,
      },
    },
  ],

  review: [
    {
      user: {
        type: Objectid,
        ref: 'Users',
        required: true,
        unique: false,
      },

      comment: {
        type: String,
        required: true,
        unique: false,
      },
    },
  ],

  views: {
    type: Number,
    required: true,
    unique: false,
    default: 0,
  },

});

module.exports = mongoose.model('Items', items);
