const express = require("express");
const User = require("../modules/User"); // Make sure this path is correct

const router = express.Router();

// Add User
router.post("/addUser", async (req, res) => {
  console.log("Adding user...", req.body);
  try {
    const user = new User(req.body);
    await user.save(); // Await the save operation
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Users
router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find(); // Await the find operation
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update User
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
