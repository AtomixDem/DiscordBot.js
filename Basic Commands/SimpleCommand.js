/*
Discord bot script for basic commands
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


//Commands
bot.on("message", (message) =>{ // Send the message in the channel where you send the command
    if(message.content == 'Comando'){
        message.channel.send("Comando eseguito!");
    }
})

bot.on("message", (message) =>{ // Send the message in a specific channel
    if(message.content == 'ComandoAttività'){
        var id_canale = bot.channels.cache.get('837233577866559488'); // Channel ID
        id_canale.send("Messaggio");
    }
})
