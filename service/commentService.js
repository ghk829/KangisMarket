commentService = function(){
	return {
		addComment : function(reqData){
			var mongoose = require('mongoose');
			const Art = require("@model/Art");
			const Comment = require("@model/Comment");
			var artId = reqData.artId;
			Art.findById(artId,function(err,art){
				if(err) console.log(err);
				var comment = new Comment();
				comment.register = reqData.register;
				comment.comment = reqData.comment;
				comment.art = mongoose.Types.ObjectId(art._id);
				art.comments.push(comment._id);
				comment.save(function(err,referComment){
				if(err)console.log(err)
				console.log(referComment);
				art.save(function(err,result){
					console.log(result)
				})	
				})
			})
			
										},
		updateComment : function(reqData){
			const Art = require("@model/Art")
			// TO-DO : Query 구성
			 Art.find(function(err, arts){
				 if(err) return res.status(500).send({error: 'database failure'});
				 arts
			 })
		},
		deleteComment : function(reqData){

		}
	}
}



module.exports = commentService




