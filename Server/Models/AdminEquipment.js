const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    quantity: Number,
    createdBy: String,
    prices: String,
});
  
module.exports = mongoose.model('Equipment', equipmentSchema);
  