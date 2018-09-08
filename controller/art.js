exports.getArts = function(req, res){
	require('module-alias/register');
	const service = require("@service/artService")();
	const Comment = require("@model/Comment");
	service.getArts().then(
		function(arts){
			//TO-DO Front에 필요한 정보 만들어가삼요
			console.log(arts);
			res.json(arts);	
			Comment.find(function(err,res){
				console.log(res)
			})
		});
		
};

exports.registerArt = function(req,res){
	var reqData = req.body;
	require('module-alias/register');
	const service = require("@service/artService")();
	var result = service.registerArt(reqData);
	console.log(result);
	res.send(result);
	
	
}

exports.getArtDesc = function(req,res){
	var reqData = req.query;
	require('module-alias/register');
	const service = require("@service/artService")();
	service.getArtDesc(reqData).then(function(comments){
		res.json(comments);
	}
	);
}