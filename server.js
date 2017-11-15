var express = require('express');
var path = require('path');
// Create our app
var app = express();

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
  console.log('getting index');
 res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, function (){
  console.log('Express server is up on port 3000');
})
