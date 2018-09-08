var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artSchema = new Schema({
    title: String,
    //author: {type:Schema.Types.ObjectId,ref:'user'},
    // 임시로 loginId로
    author : String,
    register_date: { type: Date, default: Date.now  },
    comments : [{ type: Schema.Types.ObjectId, ref: 'comment' }],
    price : Number,
    imageSrc : [String],
    description : String
});

module.exports = mongoose.model('art', artSchema);