'use strict';


//get libraries
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path')


//create express web-app
const app = express();
const router = express.Router();


//bootstrap application settings
app.use(express.static('./public'));
app.use('/scripts', express.static(path.join(__dirname, '/public/scripts')));
app.use(bodyParser.json());


//declare port
var port = process.env.PORT || 8000;
if (process.env.VCAP_APPLICATION) {
  port = process.env.PORT;
}

//run app on port
app.listen(port, function() {
  console.log('app running on port: %d', port);
});


app.post('/api/create', function(req, res) {
  var name = req.body.name;
  var age = req.body.age;
	var idnum = req.body.idnum;
	var email = req.body.email;
	var year = req.body.year;
	var company = req.body.company;
	var quota = req.body.quota;
	var remark = req.body.remark;

	var fee = parseInt(quota) * 0.15;
  console.log(name, idnum, email, year, company, quota, remark);

	res.send(JSON.stringify({
    "name":name,
    "idnum":idnum,
    "email":email,
    "year":year,
    "company":company,
    "quota":quota,
    "fee":fee
  }));
});


app.get('/api/inquire', function(req, res) {
  var insurance_id = req.body.insurance_id;

	res.send(JSON.stringify({
    "name":"BBJ",
    "user_id":"131102xxxxxxxxxx36",
    "company_id":1,
    "year":5,
    "quota":"10,000",
    "remark":"Nothing"
  }));
});