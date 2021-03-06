var http = require('http');
var exec = require('child_process').exec;

var PORT = 7777;

http.createServer(function(request, response){
  if(request.method == "POST"){
    var body = "";
    request.on("data", function(chunk){
      body += chunk;
    });
    request.on("end", function(){
      var payload = JSON.parse(body);
      var rep = payload.repository.name;
      var home = process.env.HOME
      child = exec('git pull origin master', {cwd: home+'/'+rep}, function(err, stdout, stderr){
        if(err){
          console.log(err);
        }
        if(stderr){
          console.log(stderr);
        }
        console.log(stdout);
      });
      response.end();
    });
  }
}).listen(PORT);

console.log("Web-hook listener running on port "+PORT+".");

