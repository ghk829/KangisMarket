var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
    loginId: String,
    name: String,
    register_date: { type: Date, default: Date.now  },
    arts : [{ type: Schema.Types.ObjectId, ref: 'art' }],
});

module.exports = mongoose.model('artist', artistSchema);