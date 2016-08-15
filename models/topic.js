var mongoose = require('mongoose');
var Resource = require('./resource.js');
var resourceSchema = Resource.schema;

var topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  resources: resourceSchema
});




module.exports = mongoose.model('topics', topicSchema);
