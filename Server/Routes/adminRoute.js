const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password, secretCode } = req.body;

  if (secretCode !== process.env.ADMIN_SECRET_CODE)
    return res.status(403).json({ message: "Invalid secret code" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ username, email, password: hashedPassword });
  await newAdmin.save();
  res.status(201).json({ message: "Admin registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(404).json({ message: "Admin not found" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Wrong credentials" });

  const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
});

module.exports = router;
