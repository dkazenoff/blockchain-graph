const { creds } = require('./../../config/default');
let neo4j = require('neo4j-driver').v1;
let driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic(creds.database.username, creds.database.password));

exports.print_last_transaction = async function(options) {
// var myDate = new Date("July 1, 1978 02:30:00"); // Your timezone!
// var myEpoch = myDate.getTime()/1000.0;
// document.write(myEpoch);
//--Above converts human readable time to epoch

    let session = driver.session();
    //DO Payment API with Token. Await Confirmation*******************
    let result = await session.run(' ', {
        

    });
    //let originalpearls = result.records[0].get(0).properties.prop;
    //result.records[0].get(0).properties.prop = ;
    session.close();
    console.log(result.records)
    return !result.records.length;
}