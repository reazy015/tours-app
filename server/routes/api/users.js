const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../../models/User');

// @route POST api/users
// @desc register new user
// @access Public
router.post('/', [
  check('name','Name is require').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty(),
  check('password','Min characters length 6 symbold').isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()});
  }

  const {name, email, password} = req.body;

  try {
    let user = await User.findOne({email});
    console.log(user);
    if(user) return res.status(400).json({errors: {msg: 'User already exists'}});

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        name: user.name
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000}, (err, token) => {
      if(err) throw err;
      res.json(token);
    });

  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
