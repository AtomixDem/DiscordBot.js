/*
Discord bot script for send a user Tag
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) =>{
    if(message.content == '!command'){ // Your command
        message.channel.send("Hi, " + message.author.toString()); // Tag of the user who ran the command
    }
})

client.on("message", (message) =>{
    if(message.content == '!commandid'){ // Your command
        message.channel.send("Hi, <@USER_ID>"); // Paste the user ID
    }
})

