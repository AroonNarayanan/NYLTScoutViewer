var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var htmlPdf = require('html-pdf');

var app = express();
var router = express.Router();








var port = process.env.port || 80;
app.listen(port);
console.log('Server ready on port ' + port);