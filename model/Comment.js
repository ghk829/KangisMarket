var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    //register: {type: Schema.Types.ObjectId,ref:'user'},
    //// 임시로 loginId로
    register : String,
    comment : String,
    art : {type:Schema.Types.ObjectId,ref:'art'}
    
});

module.exports = mongoose.model('comment', commentSchema);