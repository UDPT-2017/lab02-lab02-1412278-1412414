var express = require('express');
var app = express();

require('./config')(app, express);

//start server
var port = 3000;
app.listen(port, function() {
  console.log(`Listening on port ${port}!!`);
});
