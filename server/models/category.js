/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const category = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model('Category', category);
