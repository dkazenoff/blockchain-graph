const express = require('express');
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const _ = require('lodash');
const chainModel = require('./../model/chainModel');
const fetch = require('node-fetch');
// let xhr = new XMLHttpRequest();
// xhr.open('GET', "https://ipinfo.io/json", true);
	// xhr.send();
	// xhr.onreadystatechange = processRequest;
// var JSONbig = require('json-bigint');



router.post('/', async (req, res) => {


	

	function processRequest(e) {
	    if (xhr.readyState == 4) {
	        // time to partay!!!
	    }
	}


  res.status(200).json({
    user: await chainModel.(req.body)
  });
});


module.exports = router;