const mongoose = require('mongoose');
const spaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  capacity: Number,
  imageUrl: String,
  createdBy: String,
  prices: String,
});

module.exports = mongoose.model('Space', spaceSchema);
