var express =  require('express');
var app = express();
var port = 2929;
var morgan = require("morgan");
var dataModule = require('./backend/domain_data.js');

app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/client',express.static(__dirname + '/client'));

app.use(morgan('dev'));

app.get('/',function(req,res){
	res.sendfile('./index.html');
});

app.get('/finance',function(req,res){
	res.json(dataModule.finance);
});
app.get('/insurance',function(req,res){
	res.json(dataModule.insurance);
});

app.listen(port,function(){
	console.log("server started running on port "+port+"...!!!");
});