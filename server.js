var express = require('express');
var path = require('path');
// Create our app
var app = express();

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
  console.log('getting index');
 res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/s3', require('react-s3-uploader/s3router')({
    bucket: "bontrip",
    region: 'us-east-1', //optional
    headers: {'Access-Control-Allow-Origin': '*'}, // optional
    ACL: 'private', // this is default
    uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));

var port = process.env.PORT ||3000;
app.listen(port, function (){
  console.log('Express server is up on port '+port);
})
