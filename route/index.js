module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	var express = require('express');
	var router = express.Router();
	router.get('/', function(req, res) {
		res.sendFile(app.get('rootDir') + '/index.html');
	});

	return router;	//라우터를 리턴
};

