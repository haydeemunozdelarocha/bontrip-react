const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('coming up');
});

module.exports = router;