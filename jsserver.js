var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/Aboutme-App/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'index.html'));
});

var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

