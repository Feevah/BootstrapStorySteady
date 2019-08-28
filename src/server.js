const path = require('path')
const express = require("express");
const db = require("./db.js");
const PORT = process.env.PORT || 5000

const app = express();
const publicDirectory = path.join(__dirname, '../public')


app.use(express.static(publicDirectory))





app.get('/add', (req, res) => {
	var newStory =  req.query.story;
   
      console.log(newStory)
       db.insertCaughtData(newStory)
       	.then(result => {res.send(result)})
       	.catch(error => res.send("We broke"));
       // res.end()
   
})


// Render database at url /storiesPast


app.get('/storiesPast', (req, res) => {
  db.getCaughtData()
  .then(result => {
    var newArr = [];
    result.forEach(function(obj) {
      newArr.push(obj.posts);
    })

    res.send(newArr)})
  .catch(error => res.send("we broke at part 2"));    
})




	// 404
app.get('*', (req, res) => {
    res.send("Sorry, the page you requested does not exist.")
})



app.listen(PORT, () => {
	console.log(`Listening on ${ PORT }`)
}) 