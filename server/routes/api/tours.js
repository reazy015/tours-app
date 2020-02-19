const express = require('express');
const {check, validationResult} = require('express-validator');
const Tour = require('../../models/Tour');
const router = express.Router();

// @route POST api/tours
// @desc Create a tour
// @access Public

router.post('/',
  [
  check('name', 'Name is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('location', 'Location is required').not().isEmpty(),
  check('price', 'Price is required').not().isEmpty()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(true);
    return res.status(400).json({errors: errors.array()})
  }

  const {name, description, location, price} = req.body;

  try {
    const newTour = new Tour({
      name,
      description,
      location,
      price
    });

    const tour = await newTour.save();

    res.json(tour);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/tours
// @desc Get all tours
// @access Public
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find().sort({date: -1});
    res.json(tours);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
