const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
				var queryData = url.parse(req.url, true).query;
		console.log(queryData.name)
	res.write(`Hallo ${queryData.name}!`);
	res.end();
}).listen(3000);
