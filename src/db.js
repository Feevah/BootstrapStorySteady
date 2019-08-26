
var mysql = require('mysql'),
    // config  = require("./config.json"),
    email = "";
    

function getCaughtData () {
    

    return new Promise((resolve, reject) => {
    var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b0d23b0d012985',
    password : '5ce07831',
    database : 'heroku_672e1b02f8a4450'
});;
        connection.connect(function(err){ 
        connection.query("SELECT * FROM storyPosts", function (err, result) {
            if (err) throw err;
            // console.log("calling inside the function", result);
            resolve(JSON.parse(JSON.stringify(result)));
        })}

    )});
}

function insertCaughtData(story) {
    var connection = mysql.createConnection({
      host     : 'us-cdbr-iron-east-02.cleardb.net',
      user     : 'b0d23b0d012985',
      password : '5ce07831',
      database : 'heroku_672e1b02f8a4450'
});
    connection.connect(function(err) {
        if (err) throw err;
        var sql = "INSERT INTO storyPosts (posts) VALUES ('" + story +"')";
        connection.query(sql, function(err, result) {
         if (err) throw err;
         console.log("Story entered");
         connection.end(); // close the connection
     })
    })
}
// getCaughtData(); //  test call
// insertCaughtData(email); //test call

module.exports.getCaughtData = getCaughtData;
module.exports.insertCaughtData = insertCaughtData;