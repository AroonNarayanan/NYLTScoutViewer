var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var htmlPdf = require('html-pdf');
var csv = require('csvtojson');

var app = express();
mongoose.connect('mongodb://api:camphub@ds030719.mlab.com:30719/CampHub_DB');
//mongoose.connect('mongodb://localhost:27017');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var options = multer.diskStorage({
	destination: 'temp/',
	filename: function (req, file, cb) {
		cb(null, req.params.scoutid);
	}
});
var csv_uploads = multer({ storage: options });

var router = express.Router();

router.post('/upload/interviews',csv_uploads.single('csv'),function(req,res){
    
});





app.use(router);
var port = process.env.port || 80;
app.listen(port);
console.log('Server ready on port ' + port);