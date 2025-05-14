const {Router} = require('express');
require('dotenv').config();
const Booking = require('../Models/userBookings');
const User = require('../Models/User');
const Space = require('../Models/AdminSpaces');
const Equipment = require('../Models/AdminEquipment');
const bookingRoutes = Router();

bookingRoutes.post('/create', async (req, res) => {
  try {
    const { userId, assetId,  date, quantity } = req.body;
    if (!userId || !assetId ||  !date || quantity === undefined) {
      return res.status(400).json({ message: "Missing required fields: userId, assetId, assetModel, date, quantity" });
    }
    const booking = new Booking({
      user: userId,
      asset: assetId,
      assetModel, // Ensure this field is saved
      date,
      quantity
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Error creating booking", error: err.message, details: err });
  }
});

bookingRoutes.post('/simple-create', async (req, res) => {
  try {
    const { userId, assetId, assetModel, date, quantity } = req.body;

    // Validate required fields
    if (!userId || !assetId || !assetModel || !date || quantity === undefined) {
      return res.status(400).json({ message: "Missing required fields: userId, assetId, assetModel, date, quantity" });
    }

    // Create a new booking
    const booking = new Booking({
      user: userId,
      asset: assetId,
      assetModel,
      date,
      quantity
    });

    // Save the booking to the database
    await booking.save();

    // Respond with the created booking
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ message: "Error creating booking", error: err.message });
  }
});
  
bookingRoutes.get('/user/:userId', async(req,res)=>{
  try {
      const bookings = await Booking.find({ user: req.params.userId })
        .populate({ path: 'user', model: User, select: 'email' })
        .populate({ path: 'asset', model: req.query.itemType === 'space' ? Space : Equipment, select: 'name description capacity imageUrl' });

      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: "Error fetching bookings", error: err.message });
    }
})
  
module.exports = bookingRoutes;