const express = require('express');
const router = express.Router();
const { customerSchema } = require('../Models/User');

router.post('/signup', async (req, res) => {
  const event = req.body;

  try {
    if (event.type === 'user.created') {
      const data = event.data;

      try {
        // Check if user already exists
        const existingUser = await customerSchema.findOne({ clerkId: data.id });
        
        if (existingUser) {
          // Update existing user instead of creating a new one
          const updatedUser = await customerSchema.findOneAndUpdate(
            { clerkId: data.id },
            {
              email: data.email_addresses?.[0]?.email_address || existingUser.email,
              firstName: data.first_name || existingUser.firstName,
              lastName: data.last_name || existingUser.lastName,
              phoneNumbers: data.phone_numbers?.map(p => p.phone_number) || existingUser.phoneNumbers,
              imageUrl: data.image_url || existingUser.imageUrl,
            },
            { new: true }
          );
          
          return res.status(200).json({
            message: 'User updated via Clerk webhook',
            status: true,
            data: updatedUser,
          });
        }
        
        // Create new user if they don't exist
        const newUser = await customerSchema.create({
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || '',
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          phoneNumbers: data.phone_numbers?.map(p => p.phone_number) || [],
          imageUrl: data.image_url || '',
          role: 'user',
        });

        return res.status(200).json({
          message: 'User created via Clerk webhook',
          status: true,
          data: newUser,
        });
      } catch (err) {
        console.error('Error saving user from webhook:', err);
        return res.status(500).json({
          message: 'Error saving user',
          status: false,
          error: err.message,
        });
      }
    }
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return res.status(500).json({
      message: 'Error processing webhook event',
      status: false,
      error: error.message
    });
  }
});

module.exports = router;
