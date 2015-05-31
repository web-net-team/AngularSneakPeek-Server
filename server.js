/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/restify/restify.d.ts"/>

var restify = require('restify');

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.queryParser());

server.get('/movies/search', function(req, res, next) {
	var movies = [
		{ id:1, name: "Independance Day", actor: "Will Smith", year: 1997 },
		{ id:2, name: "Lord of the rings", actor: "Will Smith", year: 1997 },
		{ id:3, name: "Happy Day", actor: "Will Smith", year: 1997 },
	];
	
	res.json(200, movies);
	return next();
});

server.post('/movies/rate', function(req, res, next) {
	return next();
});

server.get('/movies/:id', function(req, res, next) {
	res.json(200, { id:req.params.id, name: "Independance Day", actor: "Will Smith", year: 1997 });
	return next();
});

server.post('/movies', function(req, res, next) {
	return next();
});

server.put('/movies', function(req, res, next) {
	return next();
});

server.on('uncaughtException', function (req, res, route, err) {
    console.error(err.stack);
});

server.listen(process.env.PORT || 3000, function() {
	console.log('%s listening at %s', server.name, server.url);
});
