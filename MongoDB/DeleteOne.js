/*
Discord bot script for delete an object in the Collection
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const MongoClient = require("mongodb").MongoClient; // Install MongoDB library => npm install mongodb

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Connection
var urldb = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@*********.*********.mongodb.net/test" // Paste your MongoDB link here
    MongoClient.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        var database = db.db("COLLECTION_NAME");

        database.collection("COLLECTION_NAME").deleteOne({id:"1234"}) // Delete an object

    })
