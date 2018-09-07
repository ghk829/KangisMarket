exports.getArts = function(req, res){
	require('module-alias/register');
	const Art = require("@model/Art")
	var art = new Art();
	console.log(req.body);
	art.title = req.body.title;
	art.author = req.body.author;
	art.register_data = new Date(req.body.register_data);
	console.log(art);
	Art.find(function(err, art){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(art);
    })
};
