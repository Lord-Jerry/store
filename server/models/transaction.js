/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const transaction = new Schema({

  buyer: {
    id: {
      type: ObjectId,
      required: true,
      unique: false,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
  },

  goods: [
    {
      id: {
        type: ObjectId,
        required: true,
        unique: false,
      },

      quantity: {
        type: Number,
        required: true,
        unique: false,
        default: 1,
      },

      price: {
        type: Number,
        required: true,
        unique: false,
      },

    },
  ],

  total_price: {
    type: Number,
    required: true,
    unique: false,
  },

});

module.exports = mongoose.model('Transaction', transaction);
