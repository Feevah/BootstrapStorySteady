
var mysql = require('mysql')
    // config  = require("./config.json"),
var config = { 
    host     : process.env.HOST,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database,
}
    

function getCaughtData () {
    

    return new Promise((resolve, reject) => {
    var connection = mysql.createConnection(config);
        connection.on("error", function (err) {
            reject(err);
        })
        connection.connect(function(err){ 
            if (err) throw err;
            connection.query("SELECT * FROM storyPosts", function (err, result) {
            if (err) throw err;
            // console.log("calling inside the function", result);
            connection.end();
            resolve(JSON.parse(JSON.stringify(result)));
        })}

    )});
}

function insertCaughtData(story) {
    return new Promise(function(resolve, reject) {
        var connection = mysql.createConnection(config);
        connection.on("error", function (err) {
            reject(err);});
        connection.connect(function(err) {
            if (err) reject (err);
            var sql = "INSERT INTO storyPosts (posts) VALUES ('" + story +"')";
            connection.query(sql, function(err, result) {
                if (err) reject(err);
                connection.end();
                resolve("Story entered");
                connection.end(); // close the connection
            })
        })
    });

};


// getCaughtData(); //  test call
// insertCaughtData(email); //test call

module.exports.getCaughtData = getCaughtData;
module.exports.insertCaughtData = insertCaughtData;