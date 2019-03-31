/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;
// TODO: properly rethink database structure
const items = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },

  category: {
    type: String,
    required: true,
    unique: false,
    maxlength: 50,
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
    id: {
      type: ObjectId,
      required: true,
      unique: false,
    },

    name: {
      user: {
        type: String,
        required: true,
        unique: false,
        maxlength: 40,
      },
    },
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
        id: {
          type: Objectid,
          required: true,
          unique: false,
        },
        name: {
          type: String,
          required: true,
          unique: false,
        },
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
