var express = require('express');
var path = require('path');
// Create our app
var app = express();

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
  console.log('getting index');
 res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT ||3000;
app.listen(port, function (){
  console.log('Express server is up on port '+port);
})
