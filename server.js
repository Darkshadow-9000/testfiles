var http=require('http');
var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname +'/index.html','utf8');
var myWriteStream=fs.createWriteStream(__dirname +'/WriteMe.txt',)
myReadStream.on('data', function(chunk){
    console.log("Chunk received");
    console.log(chunk);

    myWriteStream.write(chunk);

});







/*var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(req.url);
    res.end();
}).listen(8000);*/