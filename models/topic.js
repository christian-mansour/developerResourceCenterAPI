var mongoose = require('mongoose');
var Resource = require('/resource.js');
var resourceSchema = Resource.schema;

var topicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  resources: [ resourceSchema ] 
});


var Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
