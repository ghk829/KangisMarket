artService = function(){
	return {
		registerArt : function(reqData){
			var result;
			const Art = require("@model/Art")
			
			var art = new Art();
			//reqData Setter
			for(var elem in reqData){
				art[elem] = reqData[elem];
			}
			art.save(function(err,art){
				if(err){
					result = "fail";
				}
				else{
					result="success";
					}
				console.log(art);
			})
			return result;
										},
		getArts : function(res){
			return new Promise(function(resolved,rejected){
				const Art = require("@model/Art")
				// TO-DO : Query 구성
				 Art.find(function(err, arts){
				 if(err) return res.status(500).send({error: 'database failure'});
				 resolved(arts);
			 })
			})
		},
		getArtDesc : function(reqData){
			return new Promise(function(resolved,rejected){
				const Art = require("@model/Art");
				const Comment = require("@model/Comment");
				var mongoose = require('mongoose');
				Art.findOne({_id:reqData.id},function(err,art){
					if(err){}
					var commentsQuery = {art: mongoose.Types.ObjectId(art._id)}
					Comment.find(commentsQuery,function(err,comments){
						resolved(comments)
					})
				})
			})
			

		}
	}
}



module.exports = artService




