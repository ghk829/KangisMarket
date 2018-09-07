artService = function(){
	return {
		registerArt : function(reqData){
				require('module-alias/register');
				const Art = require("@model/Art")
				var art = new Art();
				art.title = reqData.title;
				art.author = reqData.author;
				art.description = reqData.description;
				art.price = reqData.price;
				return art;
										},
		getArts : function(){
			require('module-alias/register');
			const Art = require("@model/Art")
			// TO-DO : Query 구성
			 Art.find(function(err, arts){
				 if(err) return res.status(500).send({error: 'database failure'});
				 arts
			 })
			
		}
	}
}



module.exports = artService




