const express = require("express");
const router = express.Router();
// const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
// @route   POST api/user
// @desc    Register route
// @access  Public
const auth = require("../../middleware/auth");

router.post(
  "/register",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "the e-mail is required").isEmail(),
    check("password", "please enter a min 6 characters").isLength({ min: 6 })
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { name, email, password } = req.body;
    try {
      // check if the user exists
      let user = await User.findOne({ email });
      if (user)
        res.status(400).json({ errors: [{ msg: "user already exists" }] });
      // grabing the avatar if the user is connected by email
      // const avatar = gravatar.url(mail, {
      //   s: "200",
      //   r: "pg",
      //   d: "mm"
      // });
      user = new User({
        name,

        email,
        password
        // avatar
      });
      //   encrypting the password

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // toke access after registration
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);
router.get("/login", auth, (req, res) => {
  console.log(req.user);
  res.json(req.user);
});
module.exports = router;
