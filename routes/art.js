module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	require('module-alias/register');
	var express = require('express');
	var router = express.Router();
	var controller = require('@controller/art')
	router.post('/', controller.getArts);
	return router;	//라우터를 리턴
};
