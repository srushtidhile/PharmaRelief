const router = require('express').Router();
let User = require('../models/user.model');

// get all users from database
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add a user to database
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;

  const newUser = new User({username, password, address});

  // user saved to database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;