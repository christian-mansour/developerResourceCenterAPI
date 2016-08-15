var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');
var Resource = require('../models/resource');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Developer Resource Center API' });
// });

router.get('/', function(req, res, next) {
  // Query the Topic model for all topics
  Topic.find({}, function(err, topics) {
    // Render the topics in JSON format
    res.status(200).json(topics);
  });
});

router.get('/:id', function(req, res, next) {
  // Query the Topic model for a single topic
  Topic.findById(req.params.id, function(err, topic) {
    // Render the topic in JSON format
    res.status(200).json(topic);
  });
});




module.exports = router;
