exports.getArts = function(req, res){
	var reqData = req.body;
	require('module-alias/register');
	const service = require("@service/artService")();
	//VO 구성
	var art = service.registerArt(reqData)
	console.log(art);
	//Controller에서 데이터 가져와서 보내는 기능만 남기고 나머지는 다른 소스로 분리해야 함
	art.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }
        
        res.json({result: 1});

    });
};
