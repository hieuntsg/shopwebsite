var express = require('express');

var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '/dist')));

console.log(path.join(__dirname, '/dist'));

/* GET home page. */
app.get('/', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+' /index.html')); 
});

app.listen(8081, function () {
  console.log('listening!')
})

