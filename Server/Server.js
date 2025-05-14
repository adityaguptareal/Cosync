const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/AdminRoute');
const webhookRoutes = require('./routes/ClerkWebhook');
const bookingRoutes = require('./routes/Bookingroutes');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.use('/api/v1/admin', adminRoutes);
app.use('/api/webhooks', webhookRoutes); 
app.use('/api/v1/bookings', bookingRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
