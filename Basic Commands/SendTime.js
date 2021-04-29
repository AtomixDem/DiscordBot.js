/*
Discord bot script for send time
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


bot.on("message", (message) =>{ // Send time
    if(message.content == '!time'){
        var date = new Date();
        var hour = data.getHours();
        var minute = data.getMinutes();

        message.channel.send(":alarm_clock: Ora attuale: " + hour + ":" + minute); // Message with the time (:alarm_clock: is the emoji clock)
    }
})
