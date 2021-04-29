/*
Discord bot script for send a private messages
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) =>{
    if(message.content == '!privateuser'){ // Your command
        message.author.send("Hi, how are you?"); // Private Bot message
    }
})

client.on("message", (message) =>{
    if(message.content == '!privateid'){ // Your command
        var utente = client.users.cache.get("USER ID"); // Paste the user ID
        utente.send("Hi, I am a Discord Bot!") // Private Bot message to a specific ID
    }
})
