const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  console.log('getting index');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: 'bontrip',
  region: 'us-east-1',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'private',
  uniquePrefix: true,
}));

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server is up on port ' + port);
});
