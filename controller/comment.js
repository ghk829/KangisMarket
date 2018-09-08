exports.addComment = function(req, res){
	require('module-alias/register');
	const service = require("@service/commentService")();
	var reqData = req.body;
	var arts = service.addComment(reqData);
	res.json(arts);
};

exports.updateComment = function(req,res){
	//To-Do
}
exports.deleteComment = function(req,res){
	//To-Do
}