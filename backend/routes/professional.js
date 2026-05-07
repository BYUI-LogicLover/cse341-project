const express = require('express');
const router = express.Router();
const professional = require('../data/professional');

router.get('/', (req, res) => {
  res.json(professional);
});

module.exports = router;
