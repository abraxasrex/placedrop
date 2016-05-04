var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
  res.sendFile('./public/index.html');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on ', port);
});
