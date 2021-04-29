/*
Discord bot script for kick a user
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) => {
    if(message.content.startsWith("!kick")) { // Your command

        var userKick = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS")) { // Permission required
            message.channel.send("You don't have the permission!");
            return;
        }
        
        if(!userKick) {
            message.channel.send("You haven't mentioned any users!");
            return;
        }

        if(!userKick.kickable) {
            message.channel.send("I can not do that!");
            return;
        }

        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Kicked user!")
            .addField("User:", "<@" + userKick + ">", false)


        userKick.kick()
            .then(() => message.channel.send(embed)) // Bot message

    }
})
