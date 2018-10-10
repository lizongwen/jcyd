var http=require('http');
var server=http.createServer((req,resp)=>{
	resp.writeHead(200,{
		'Content-type':'text/plain'
	});
	resp.end('hello my nodejs');
});
server.listen('8090')
