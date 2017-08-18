var express = require('express');

//create the app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Server is up and listening at port 3000')
})