var express = require('express');

//create the app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if( req.headers['x-forwarded-proto'] === 'http' ){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Server is up and listening at port ' + PORT);
})