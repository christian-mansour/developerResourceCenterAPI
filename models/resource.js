var mongoose = require('mongoose');

var resourceSchema = new mongoose.Schema({
  video: { type: String, required: true },
  documentation: { type: String, required: false },
  install: { type: String, required: false },
  tutorial: { type: String, required: false },
  cdn: { type: String, required: false },
  guide: { type: String, required: false }
});


var Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
