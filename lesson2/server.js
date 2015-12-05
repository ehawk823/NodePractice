var connect = require('connect');
var http = require('http');

var app = connect();

app.use('/profile', profile);

function profile(request, response){
  console.log('lol');
}

http.createServer(app).listen(8888);
console.log('server is running');
