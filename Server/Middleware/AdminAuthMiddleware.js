const jwt = require("jsonwebtoken")
require('dotenv').config();
const jwt_Secret = process.env.ADMIN_SECRET_CODE;

const adminMiddleware = (req, res, next) => {
    console.log("Incoming Authorization Header:", req.headers["authorization"]);
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Authorization header missing or invalid" });
    }
    
    const token = authHeader.split(' ')[1];
    try {     
        const decoded = jwt.verify(token, jwt_Secret);
        if (decoded) {
            req.userId = decoded.id;
            next();
        } else {
            res.status(401).json({ message: "Invalid token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Invalid token", error: error.message });
    }
}

module.exports = adminMiddleware;
