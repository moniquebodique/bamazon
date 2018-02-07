var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
 host: "localhost",
 port: 3306,

 user: "root",
 password: "Frogger123",
 database: "bamazondb"
});

var itemIDs = [];

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);
 start();

});

function start(){
connection.query("SELECT * FROM products " + artist, function(error, results) {
	for (var i=0; i<results.length; i++){
		console.log("Item ID: " + results[i].item_id + "/t" + results[i].products)
		console.log("------------------------");
		itemIds.push(results[i].item.id);


function firstQuestion(){
	var selectItem = {
		name: "itemList",
		type: "input",
		message: "Enter item ID of item you want to purchase."
	}
}




	}
	inquirer.prompt([
	{
		type: 'list',
		choices: ['Bid', 'Post'],
		name: 'choice',
		message: 'Would you like to bid on an item or post an item?'
	}]).then((result)=>{
		if(result.choice === 'Bid'){
			inquireBid();
		}
		else if(result.choice === 'Post'){
			inquirePost();
		}
	})
}







function printAllSongs() {
 connection.query("SELECT * FROM songs", function(error, results) {
   if(error) throw error;

   console.log(results);
 })
}

function printClassicRockSongs() {
 connection.query("SELECT * FROM songs WHERE genre='Classic Rock'", function(error, results) {
   if(error) throw error;
   console.log(results);

 })
}

function printSongByArtist(artist) {
 connection.query("SELECT * FROM songs WHERE artist = " + artist, function(error, results, fields) {
   console.log("results", results);

 })
}