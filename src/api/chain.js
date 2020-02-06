const express = require('express');
const router = express.Router();
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const _ = require('lodash');
const chainModel = require('./../model/chainModel');
const fetch = require('node-fetch');
// let xhr = new XMLHttpRequest();
// xhr.open('GET', "https://ipinfo.io/json", true);
	// xhr.send();
	// xhr.onreadystatechange = processRequest;
	// function processRequest(e) {
	//     if (xhr.readyState == 4) {
	//         // time to partay!!!
	//     }
	// }
// var JSONbig = require('json-bigint');
setInterval(print_test, 5000);

async function print_test() {
	console.log("hi")
	let options = {
		from: "100",
		to: "500",
		amount: 7.01012
	}
	let test_transaction = await chainModel.graph_test(options);

	return true;
	// res.status(200).json({
 //    	transaction: test_transaction
 //  });
};


router.post('/', async (req, res) => {


	

	


  res.status(200).json({
    user: await chainModel.print_last_transaction(req.body)
  });
});


module.exports = router;
