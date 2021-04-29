/*
Discord bot script for send a images
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) =>{
    if(message.content == '!image'){ // Your command
        message.channel.send("I send your image:", {files: ["Image1.jpg"]}); // Send one image
    }
})

client.on("message", (message) =>{
    if(message.content == '!image'){ // Your command
        message.channel.send("I send your image:", {files: ["Image1.jpg", "Image2.jpg"]}); // Send two or more images
    }
})


