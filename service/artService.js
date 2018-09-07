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
										}
	}
}



module.exports = artService




