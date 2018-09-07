var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    register: String,
    comment : String
});

module.exports = mongoose.model('comment', commentSchema);