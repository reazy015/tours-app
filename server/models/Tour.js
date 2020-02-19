const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
});

module.exports = Tour = mongoose.model('tour', TourSchema);
