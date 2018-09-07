var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artSchema = new Schema({
    title: String,
    author: String,
    register_date: { type: Date, default: Date.now  },
    comments : [{ type: Schema.Types.ObjectId, ref: 'comment' }],
    price : Number,
    description : String
});

module.exports = mongoose.model('art', artSchema);