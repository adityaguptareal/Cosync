const {Router} = require('express');
const adminRouter = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {admin} = require('../Models/Admin');
const adminMiddleware = require('../Middleware/AdminAuthMiddleware');
const Space = require('../Models/AdminSpaces');
const Equipment = require('../Models/AdminEquipment');
require('dotenv').config();

const jwt_Secret = process.env.ADMIN_SECRET_CODE;

adminRouter.get('/',  function(req,res){
    // res.status(200).json({ message: 'Admin route', status: true });
    res.send('hello');

    }
)

adminRouter.post('/signup', async function (req, res) {
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const checkingExistingUser = await admin.findOne({ email: email });
        if (checkingExistingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const newAdmin = await admin.create({
            username: username,
            password: hashedPassword,
            email: email
        });
        res.status(200).json({ message: 'User created successfully', data: { username: username, email: email } });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.post('/signin', async function (req, res) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const gettingUser = await admin.findOne({ email: email });
        if (!gettingUser) {
            return res.status(404).json({ message: 'User is not registered' });
        }
        const decryptPassword = await bcrypt.compare(password, gettingUser.password);
        if (decryptPassword) {
            const token = jwt.sign({
                id: gettingUser._id
            }, jwt_Secret);
            return res.status(200).json({ message: 'User signed in successfully', token: token });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.post('/spaces', async function (req, res) {
    try {
        const { name, description, capacity, imageUrl, createdBy, prices } = req.body;

        if (!name || !description || !capacity || !imageUrl || !createdBy || !prices) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const newSpace = await Space.create({
            name,
            description,
            capacity,
            imageUrl,
            createdBy,
            prices
        });
        await newSpace.save();

        res.status(201).json({ message: 'Space created successfully', data: newSpace });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.post('/equipment', async function (req, res) {
    try {
        const { name, description, imageUrl, quantity, createdBy, prices } = req.body;
        if (!name || !description || !imageUrl || !quantity || !createdBy || !prices) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newEquipment = await Equipment.create({
            name,
            description,
            imageUrl,
            quantity,
            createdBy,
            prices
        });
        res.status(201).json({ message: 'Equipment created successfully', data: newEquipment });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.get('/equipment',  async function (req, res) {
    try {
        const equipmentList = await Equipment.find();
        res.status(200).json({ message: 'Equipment fetched successfully', data: equipmentList });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.get('/spaces',  async function (req, res) {
    try {
        const spacesList = await Space.find();
        res.status(200).json({ message: 'Spaces fetched successfully', data: spacesList });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.delete('/equipment/:id',  async function (req, res) {
    try {
        const { id } = req.params;
        const deletedEquipment = await Equipment.findByIdAndDelete(id);
        if (!deletedEquipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.status(200).json({ message: 'Equipment deleted successfully', data: deletedEquipment });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

adminRouter.delete('/spaces/:id',  async function (req, res) {
    try {
        const { id } = req.params;
        const deletedSpace = await Space.findByIdAndDelete(id);
        if (!deletedSpace) {
            return res.status(404).json({ message: 'Space not found' });
        }
        res.status(200).json({ message: 'Space deleted successfully', data: deletedSpace });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

module.exports = adminRouter;