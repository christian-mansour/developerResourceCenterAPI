var mongoose = require('mongoose');

var resourceSchema = new mongoose.Schema({
  video: { type: String, required: true },
  documentation: { type: String, required: false },
  install: { type: String, required: false },
  tutorial: { type: String, required: false },
  cdn: { type: String, required: false },
  guide: { type: String, required: false }
});




module.exports = mongoose.model('resources', resourceSchema);
