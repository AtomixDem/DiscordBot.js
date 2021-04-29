/*
Discord bot script for clear a messages
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) => {
    if(message.content.startsWith("!clear")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("You don't have the permission!");
            return
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("I can not do that!");
            return
        }
        
        var count = message.content.slice(7)
        count = parseInt(count);

        if(!count) {
            message.channel.send("Please enter a valid number!");
            return
        }

        message.channel.bulkDelete(count, true);
        message.channel.send("They have been eliminated **" + count + "** messages!") // Bot message
        .then(msg =>{
            msg.delete({timeout:10000}) // Time to clear the warning message
        })

    }
})

