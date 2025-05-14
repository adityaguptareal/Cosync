const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'assetModel'
  },
  
  date: {
    type: Date,
    required: true
  },
  quantity: Number, 
  status: {
    type: String,
    enum: ['pending','booked', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Booking', bookingSchema);
