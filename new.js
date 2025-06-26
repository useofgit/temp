// login.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Login logic here
  res.send('User logged in');
});

module.exports = router;
