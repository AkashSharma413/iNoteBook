const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

let JWT_SECRET = "Iamagoodboy";

// ROUTE 1: Create a user or Signup using: POST "/api/auth/createuser" No login required
router.post(
  "/createuser",
  [
    body("name", "Please enter a valid name").isLength({ min: 3 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Check weather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists." });
      }

      // Hashing the password and added the salt to password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      // Creating authentication token
      const authToken = jwt.sign(data, JWT_SECRET);

      // res.json({ Success: "User added successfuly!" });
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(400).send("Some error occurred!");
    }
  }
);

// ROUTE 2: Authenticate a user or login using: POST "/api/auth/login" No login required
router.post(
  "/login",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credentials." });
      }

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Please try to login with correct credentials." });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      // Creating authentication token
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// ROUTE 3: Get loggedin user details using: POST "/api/auth/getuser" Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
