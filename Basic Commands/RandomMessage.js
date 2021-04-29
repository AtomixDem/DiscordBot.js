/*
Discord bot script for send a random messages
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

var messages = ["Test1", "Test2", "Test3", "Test4"]; // Random word

// Commands
client.on("message", (message) => {
    if (message.content == "!random") { // Your command
        var random = Math.floor(Math.random() * messages.lenght)
        message.channel.send(message.author.toString() + " " + messages[random]); // Bot message
    }
});
