var http = require("http");
var fs = require("fs");
var url = require("url");
var download = require("./download");
var test = require("./test");
download.push(1);
download.push(2);
var requestListener = function(req, res){
	console.log(req.url)
	var urlObj = url.parse(req.url);
	res.writeHeader(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin":"*"});
	if(urlObj.pathname == "/api/get"){
    var jj = download.get();
		res.write(JSON.stringify(jj));
	}else if(urlObj.pathname == "/api/push"){
    var ret = download.push(Date.now()+"");
    console.log(ret);
    res.write(JSON.stringify(ret));
  }else if(urlObj.pathname == "/api/test"){
    res.write(JSON.stringify(test));
	}else{
		res.write("not found");
	}
	res.end();
}
http.createServer(requestListener).listen(4000);