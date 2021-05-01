/*
Discord bot script for tag a channel
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("message", (message) =>{
    if(message.content == '!Annuncioo'){ // Your command

        var channel = message.guild.channels.cache.get('CHANNEL_ID').toString(); // Paste the channel ID

        message.channel.send("The channel " + channel + "is beautiful!"); // Bot message
    }
})
