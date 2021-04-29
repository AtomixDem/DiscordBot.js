/*
Discord bot script for send a auto message
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
function currentTime(){
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();

    var channel = client.channels.cache.get("CHANNEL_ID"); // Channel ID where the bot send the message
    if (hour == 16 && minutes == 00) { // Hours and minutes when the bot send the message
        channel.send("Notify!") // Message bot
    }
}
setInterval(currentTime, 1000*60)
