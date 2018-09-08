module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	require('module-alias/register');
	var express = require('express');
	var router = express.Router();
	var controller = require('@controller/comment');
	router.post('/',controller.addComment);
	router.put('/:id',controller.updateComment);
	router.delete('/:id',controller.deleteComment);
	return router;	//라우터를 리턴
};
